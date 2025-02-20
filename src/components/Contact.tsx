import React, { useEffect, useState } from 'react';
import '../assets/styles/Contact.scss';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs } from 'firebase/firestore';

interface ContactMessage {
  id?: string;
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  // 🔥 Fungsi untuk mengambil data dari Firestore
  const fetchMessages = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(db, "contacts"));
      const messages = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ContactMessage[];

      console.log("📥 Data dari Firestore:", messages);
      setContacts(messages);
    } catch (error) {
      console.error("❌ Error mengambil data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  // 🔥 Fungsi untuk mengirim pesan ke Firestore
  const sendMessage = async (e: any) => {
    e.preventDefault();
    setSuccessMessage('');
    setErrorMessage('');

    // Validasi input
    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (!name || !email || !message) {
      console.log("❌ Form belum lengkap!");
      return;
    }

    setLoading(true);
    console.log("📤 Mengirim pesan...");

    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        name,
        email,
        message,
      });

      console.log("✅ Pesan berhasil dikirim dengan ID:", docRef.id);
      setSuccessMessage("Pesan berhasil dikirim!");
      setName('');
      setEmail('');
      setMessage('');

      // Refresh data agar pesan langsung muncul
      await fetchMessages();
    } catch (error) {
      console.error("❌ Error saat mengirim pesan:", error);
      setErrorMessage("Gagal mengirim pesan. Coba lagi nanti.");
    }

    setLoading(false);
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          {/* Formulir */}
          <Box component="form" noValidate autoComplete="off" className="contact-form">
            <div className="form-flex">
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                variant="outlined"
                fullWidth
              />
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                variant="outlined"
                fullWidth
              />
            </div>
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              variant="outlined"
              fullWidth
              className="body-form"
            />
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              onClick={sendMessage}
              disabled={loading}
              className="send-button"
            >
              {loading ? "Sending..." : "Send"}
            </Button>
          </Box>

          {/* Pesan Sukses / Error */}
          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {/* 🔥 Menampilkan Pesan dari Firestore */}
          <div className="messages-container">
            <h2>Messages</h2>
            {loading ? (
              <p>Loading messages...</p>
            ) : contacts.length > 0 ? (
              contacts.map((contact) => (
                <div key={contact.id} className="message-card">
                  <p><strong>{contact.name}</strong> ({contact.email})</p>
                  <p>{contact.message}</p>
                </div>
              ))
            ) : (
              <p>No messages yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
