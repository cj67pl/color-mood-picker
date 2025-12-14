const moods = {
	happy: {
		color: "#FFD93D",
		accent: "#FF9F1C",
		quotes: [
			"Happiness grows when you let yourself enjoy the moment.",
			"Today is lighter than yesterday—carry that forward.",
			"Small wins still count as victories.",
			"Joy doesn’t need permission.",
			"Let your energy be louder than your doubts.",
		],
	},
	calm: {
		color: "#A8DADC",
		accent: "#457B9D",
		quotes: [
			"Breathe in slowly. The world can wait.",
			"Calm is a skill you can practice.",
			"Peace begins where control ends.",
			"Stillness is not empty—it’s full of clarity.",
			"You are allowed to slow down.",
		],
	},
	sad: {
		color: "#5D6C89",
		accent: "#2F3E56",
		quotes: [
			"It’s okay to feel heavy sometimes.",
			"Even quiet moments are part of healing.",
			"You don’t have to be strong all the time.",
			"This feeling will pass, even if slowly.",
			"Rest is not giving up.",
		],
	},
	energetic: {
		color: "#FF4D6D",
		accent: "#C9184A",
		quotes: [
			"Move first. Confidence follows.",
			"Your energy sets the tone.",
			"Action beats hesitation.",
			"Create momentum—don’t wait for it.",
			"Today favors the bold.",
		],
	},
	angry: {
		color: "#FF0000",
		accent: "#8B0000",
		quotes: [
			"Anger is a signal—channel it wisely.",
			"Take a deep breath before reacting.",
			"Let your energy drive action, not destruction.",
			"Even storms pass—control is key.",
			"Strong emotions can fuel strong results.",
		],
	},
};



function qouteGenerator(moodType) {
    const quotes = moods[moodType].quotes;
    const randomQoute = quotes[Math.floor(Math.random() * quotes.length)];
    return randomQoute;
}

function colorSetter(element, targetMood, back) {
    const color = moods[targetMood].color;
    const accent = moods[targetMood].accent

    element.style.backgroundColor = color;
    element.style.border = `2px solid ${accent}`;
    back.style.color = accent;
}

function colorReSetter(element) {
    element.style.backgroundColor = "transparent";
	element.style.border = "none";
}



const selectedMood = document.querySelectorAll('.mood')
const instructions = document.querySelector(".inst")



selectedMood.forEach(mood => {

	
    const back = mood.querySelector(".qoute .back-arrow");
    const addText = mood.querySelector('h1');

	// mood.classList.remove("not-selected, selected");

    mood.addEventListener('click', () => {

		

        console.log(mood);
        
        const targetMood = mood.dataset.mode;
    
        addText.textContent = qouteGenerator(targetMood);
        colorSetter(mood, targetMood, back);

		selectedMood.forEach((m) => {
			m.classList.remove("selected", "not-selected");
		});

        mood.classList.add('selected');
        instructions.classList.add('inst-hide');
        
        selectedMood.forEach(m => {
            if (m !== mood) {
                m.classList.add('not-selected');
            }
        });
    });

    if (back) {
        back.addEventListener('click', (e) => {
            console.log(back);
            
            e.stopPropagation(); 
            // selectedMood.forEach((m) => m.classList.remove("selected"));
            mood.classList.remove('selected');

            selectedMood.forEach((m) => {
                m.classList.remove("not-selected");
            });
            instructions.classList.remove("inst-hide");
            colorReSetter(mood);

        });

        
    }

});


