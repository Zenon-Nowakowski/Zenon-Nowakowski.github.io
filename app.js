// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyBuITu1J_GaX2A2bPLeg0ABjxyzlNARLGk",

  authDomain: "personal-website-b4081.firebaseapp.com",

  projectId: "personal-website-b4081",

  storageBucket: "personal-website-b4081.appspot.com",

  messagingSenderId: "1043721353841",

  appId: "1:1043721353841:web:5f95f2da18a647e36a79d0",

  measurementId: "G-56NHYYJDVY"

};


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden, .hiddentop, .hiddenright');
hiddenElements.forEach((el) => observer.observe(el));
