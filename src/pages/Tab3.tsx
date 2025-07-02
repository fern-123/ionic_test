import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from '@ionic/react';
import './Tab3.css'; // Or whatever CSS file is associated with your page

const HomePage: React.FC = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Set up an interval to update the time every second
    const timerId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(timerId);
  }, []); // The empty dependency array ensures this effect runs only once on mount

  // Helper function to format the date and time
  const formatDateTime = (date: Date) => {
    // Options for date and time formatting
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long', // e.g., "Wednesday"
      year: 'numeric', // e.g., "2025"
      month: 'long',   // e.g., "July"
      day: 'numeric',  // e.g., "2"
      hour: '2-digit', // e.g., "11"
      minute: '2-digit', // e.g., "05"
      second: '2-digit', // e.g., "12"
      hour12: true,    // Use 12-hour format with AM/PM
    };

    return date.toLocaleString(undefined, options); // `undefined` uses default locale
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Current Local Time</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Live Date & Time</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <p style={{ fontSize: '1.5em', fontWeight: 'bold', textAlign: 'center' }}>
              {formatDateTime(currentDateTime)}
            </p>
            <p style={{ textAlign: 'center', color: '#666' }}>
              (Updates every second based on your device's local time)
            </p>
          </IonCardContent>
        </IonCard>

        {/* Optional: Add a refresh button for demonstration, though not strictly needed for auto-update */}
        {/*
        <IonButton expand="block" onClick={() => setCurrentDateTime(new Date())}>
          Manual Refresh
        </IonButton>
        */}
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
