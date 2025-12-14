# Color Mood Picker

Interactive, **responsive** web app where selecting a chibi emoji changes the background color, highlights the selected border, and displays a matching mood quote with smooth animations.  

---

## Demo / Screenshot
<img width="500" height="300" alt="image" src="https://github.com/user-attachments/assets/50240874-458c-420c-a1d2-731d705a3c90" />
<img width="500" height="300" alt="image" src="https://github.com/user-attachments/assets/a83f556a-e015-4c98-a8c6-693d1342b4ac" />


---

## Features
- Select a mood using **chibi emoji images**  
- Dynamically updates:  
  - **Background color**  
  - **Border highlight** on selected emoji  
  - **Displayed emoji** in the preview area  
  - **Random mood-specific quote**  
- Smooth **animations** on hover and selection  
- **Responsive layout** works on desktop and mobile devices  

---

## Technologies Used
- **HTML** – Page structure and semantic layout  
- **CSS** – Styling, hover animations, transitions, and responsive design  
- **JavaScript** – DOM manipulation, event listeners, random quote selection  

---

## How it Works
1. User clicks on a chibi emoji button.  
2. JS reads the `data-target` attribute for the selected mood.  
3. The script updates:  
   - Background color (`body.style.backgroundColor`)  
   - Border color of the selected emoji  
   - Displayed emoji image in the preview area  
   - A random mood quote  
4. CSS transitions animate **hover effects** and **selection changes**.  
5. The layout adapts automatically to different screen sizes for full responsiveness.

---

## Mood Data Structure
Each mood contains:  
- **Background color**  
- **Border color**  
- **Emoji image**  
- **List of 5 quotes**

Example (JS object snippet):  
const moods = {  
  happy: {   
    color: "#FFD93D",  
    border: "#FF9F1C",  
    emoji: "images/happy-chibi.png",  
    quotes: [ "Quote 1", "Quote 2", "Quote 3", "Quote 4", "Quote 5" ]  
  },  
  // ... other moods  
};




## Clone the repository
git clone https://github.com/cj67pl/color-mood-picker.git

## Navigate to the folder
cd color-mood-picker

## Open index.html in your browser
