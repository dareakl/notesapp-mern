import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import NoteModal from "../components/NoteModal";
import axios from "axios";
import NoteCard from "../components/NoteCard";

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const { data } = await axios.get("http://localhost:5002/api/note");
        setNotes(data.notes);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNote();
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  const addNote = async (title, description) => {
    try {
      const response = await axios.post(
        "http://localhost:5002/api/note/add",
        { title, description },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.data.success) {
        closeModal();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
      <button
        onClick={() => setModalOpen(true)}
        className="fixed right-4 bottom-4 text-2xl bg-teal-500 text-white font-bold p-4 rounded-full"
      >
        +
      </button>
      {isModalOpen && <NoteModal closeModal={closeModal} addNote={addNote} />}
    </div>
  );
};

export default Home;
