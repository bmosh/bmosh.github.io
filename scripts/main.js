const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(100);
   getInputValue();
   
    removeInput();
    await delay(100);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  createText("Starting the server...");

  await delay(500);
  createIntro();

  await delay(1000);
 
  createCode("whoami", "Who I am, and what I do.");
  createCode("projects", "An overview of my work.")
  createCode("contact", "Ways to contact me.");
  createCode("--help", "See all commands.");

  await delay(500);

  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# visitor";
  span1.textContent = " @";
  span2.textContent = " ~/rob-mosher/";

  
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);

  new_line();
}


function new_line(){
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value_one = document.querySelector("input").value;
  let value = value_one.toLowerCase().trim();
  if(value === "--help"){
    trueValue(value);
    
    createCode("whoami", "Who I am, and what I do.");
    createCode("projects", "An overview of my activities.");
    createCode("contact", "Ways to get in touch with me.");
    createCode("contact -a", "All my contacts and social pages at once.");
    createCode("credits", "Credits for this website.");
    createCode("clear", "Clear the terminal.");
    
  }
  else if(value === "projects"){
    trueValue(value);
    createText("Run any of the following commands to learn more about my projects:");
    createCode("spacex", "Incoming Application Software Intern with SpaceX")
    createCode("mitll", "Summer 23 AI/ML Internship at the MIT Lincoln Laboratory")
    createCode("oracl", "OR Advances Through Collaboration program at Cornell University")
    createCode("hablab", "Undergraduate Research Assisstant in the Richardson Lab of CEE")
  }
  else if(value === "spacex"){
    trueValue(value);
    createText("<a href='https://www.spacex.com/' target='_blank'><i class='fa fa-rocket white'></i> SpaceX:</a>")
    createText("<p>I’m excited to be joining the Application Software team at SpaceX as a Software Engineering Intern this summer!</p>")
    createText("As part of this internship, I'll have an opportunity to create mission critical applications that are used throughout SpaceX to accelerate launch vehicle production and flight!")
  }
  else if(value === "mitll"){
    trueValue(value);
    createText("<a href='https://ll.mit.edu/' target='_blank'><i class='fa fa-laptop-code white'></i> MIT Lincoln Laboratory:</a>")
    createText("<p>As an AI/ML Engineering Intern at the MIT Lincoln Laboratory in the Summer of 2023, \
    I led algorithm implementation and evaluation on a project that looked to ensure decision outcome fairness for legally protected groups in large-scale national security decision processes.")
    createText("This opportunity arose when the previous lead left to pursue a congressional fellowship, and I recognized my skills in PyTorch, \
    Scikit-Learn, Pandas, and other python libraries were strong enough to add to the project’s codebase. \
    After stepping up, my work allowed our team to effectively test algorithmic debiasing performance in a variety of ways, and report our findings to our sponsor on our original timeline.</p>")
  }
  else if(value === "oracl"){
    trueValue(value);
    createText("<a href='https://www.orie.cornell.edu/orie/research/oracl' target='_blank'><i class='fa fa-database white'></i> ORACL:</a>")
    createText("I was recruited to join the OR Advances through Collaboration research program at Cornell by my Engineering Statistics II professor in September 2022.")
    createText("My first assignment was to the GM Team, as a co-lead for a team of 14 leading correspondence with the GM Advanced Analytics Center. \
    Our team would work with them to model the potential impact of a shift from the dealership sales model, to more closely approximate the simplified direct sale model that companies like Tesla have been implementing in recent years.")
    createText("In subsequent semesters, I've been working with the Mars Wrigley company on their advertising models and retail demand forecasting.")
  }
  else if(value === "hablab"){
    trueValue(value);
    createText("<a href='https://richardson.cee.cornell.edu/service-learning-project-advising/' target='_blank'><i class='fa fa-leaf white'></i> Richardson HABLAB:</a>")
    createText("I joined the Richardson Lab of Civil and Environmental Engineering in February 2022, and was originally tasked with developing ImageJ scripts to automate the time-intensive process of algae classification and toxin level prediction.")
    createText("While working on this assignment, I realized that there was potential to automate the entire process, from the moment our volunteers submit data to when the predictions are returned to them. \
    I earned a research grant from the university to continue my work over summer 2022, and during that time I implemented this full automation using Python, PowerShell, and the Google Drive and Mail APIs.")
    createText("Now, I am working to shift our system away from the Google Ecosystem with a redesigned standalone website, submission form and SQL Server to increase volunteer accessibility and trust in the program.")
  }
  else if(value === "whoami"){
    trueValue(value);
    createText("Hello, my name is Rob :)")
    createText("I'm a junior CS/ORIE student at Cornell University. \
    I'm highly motivated and challenge-seeking, with demonstrated technical, leadership, and communication skills to go along with a strong academic record.")
    createText("I'm pursuing a career focused on software engineering, data science, scientific computing, or quantitative modeling in the AI/ML field. I hope you enjoy my website!")
  }
  else if(value === "contact -a"){
    trueValue(value);
    createText("<a href='mailto:ram487@cornell.edu' target='_blank'><i class='fa fa-envelope white'></i> ram487@cornell.edu</a>");
    createText("<a href='https://github.com/bmosh' target='_blank'><i class='fab fa-github white'></i> github.com/bmosh</a>")
    createText("<a href='https://www.linkedin.com/in/r-mosher/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/r-mosher</a>")
    createText("<a href='https://www.instagram.com/bobby.mosherß/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/bobby.mosher</a>")
  }
  else if (value === "contact"){
    trueValue(value);
    createText("Run any of the following commands to get in touch:");
    createCode("email", "my email address");
    createCode("linkedin", "my LinkedIn profile");
    createCode("insta", "my Instagram profile");
    createCode("github", "my GitHub profile");
  }
  else if(value === "email"){
    trueValue(value);
    createText("<a href='mailto:ram487@cornell.edu' target='_blank'><i class='fa fa-envelope white'></i> ram487@cornell.edu</a>");
  }
  else if(value === "linkedin"){
    trueValue(value);
    createText("<a href='https://www.linkedin.com/in/r-mosher/' target='_blank'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/r-mosher</a>");
  }
  else if(value === "insta"){
    trueValue(value);
    createText("<a href='https://www.instagram.com/bobby.mosherß/' target='_blank'><i class='fab fa-instagram white'></i> instagram.com/bobby.mosher</a>");
  }
  else if(value === "github"){
    trueValue(value);
    createText("<a href='https://github.com/bmosh' target='_blank'><i class='fab fa-github white'></i> github.com/bmosh</a>")
  }

  else if(value === "saniya"){
    trueValue(value);
    createText("I love my beautiful girlfriend <3")
  }
  else if (value === "su") {
    trueValue(value);
    createText("Nice try ;)")

  }
  
  else if (value === "credits"){
    trueValue(value);
    createText("This terminal-style website was adapted from <a href='https://github.com/heberleonard2/terminal-style-portfolio-page'>Heber Leonard's</a> terminal-style portfolio page under MIT license.");
  }

  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
    const p = document.createElement("p");
    const span1 = document.createElement("span");
    const span2 = document.createElement("span");
    p.setAttribute("class", "path")
    p.textContent = "# visitor";
    span1.textContent = " @";
    span2.textContent = " ~/rob-mosher/";

    
    p.appendChild(span1);
    p.appendChild(span2);
    app.appendChild(p);

  }
  else{
    falseValue(value);
    createText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  p.innerHTML = text;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  p.innerHTML =
 `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}
function createIntro() {
  const p = document.createElement("p");
  p.setAttribute("class", "intro");
  p.textContent = "Welcome to my website! \nTo learn more about me, you can run several commands, e.g.";
  app.appendChild(p);
}

open_terminal();