   
    import { h, Component, render } from 'https://esm.sh/preact';
    import htm from 'https://esm.sh/htm';
    const html = htm.bind(h);
    window.onbeforeunload = function () {
        window.scrollTo(0,0);
    };
    class App extends Component {
        //state = {};
        componentDidMount(){
            new Typed('#type', {
                strings: ['websites.', 'art.', 'my ideas.', 'things.'],
                typeSpeed: 75,  
                backSpeed: 50,
                backDelay: 1500,
                startDelay: 2200
            });
            new Typed('#thing', {
                strings: ["Hi, I'm Tyler"],
                typeSpeed: 75,
                startDelay: 200
            });
            anime({targets: `.navt`, translateY: 100, duration: 1200, delay: 200})  

        }

        render() {

            var prevSection = -1
            window.onscroll = function(){
                var section = window.scrollY/innerHeight
                if(Math.floor(prevSection)<Math.floor(section)){
                    //make section specific animations
                    if(Math.round(section)==1){
                        console.log("ran")
                        anime({targets: `#aboutMeInFromLeft`, translateX: "100vw", duration: 2000})  
                        anime({targets: `#aboutMeInFromRight`, translateX: "-100vw", duration: 2000})  
                    }else if(Math.round(section)==2){
                        console.log("ran")
                        anime({targets: `#galleryInFromLeft`, translateX: "100vw", duration: 4000})  
                        anime({targets: `#galleryInFromRight`, translateX: "-100vw", duration: 3500})  
                    }
                }
                prevSection = section
            }

            var thing= ["Landing","About Me", "Gallery"]
            return (html`<body class="">
                <nav id="nav" style="transform: translate(0, -100px);" class="navt fixed top-0 left-0 w-full grid grid-rows-1 grid-flow-col border-y-[3px] border-violet-400 backdrop-blur-sm bg-white/50  5 z-50">
                    ${thing.map(d=>{return(html`<a href=${"#" + d} class="navBorder py-2 text-slate-800 w-full text-center font-bold  border-r-[3px] border-violet-400 hover:bg-black/75 hover:text-white ease-in-out transition-all">${d}</a>`)})}
                </nav>
                <main class="overflow-hidden">
                    <section id="Landing" class="bg-[#ffeaa7] bg-[url('/squiggle.svg')] h-[100vh] w-full border-b-4 border-black ">
                        <h1 id="thing" class="w-full sm:text-[15vw] text-[25vw] leading-none text-center font-bold text-slate-800 absolute top-[20%] sm:top-[5%]">Tyler Tocket</h1>
                        <div class="w-full sm:text-[5vw] text-[15vw] absolute bottom-[20%] sm:bottom-[5%]">
                            <h2 class="text-center  text-slate-800 font-medium">I make</h2>
                            <div class="w-full flex place-content-center	">
                                <h2 id="type" class=" inline text-center text-slate-800 font-medium">things.</h2>
                            </div>
                        </div>
                    </section>
                    <section id="About Me" class="bg-gradient-to-r from-cyan-950 to-teal-950 h-[100vh] w-full  border-b-4 border-black sm:flex sm:flex-row sm:px-[5vw] px-[3vw] ">
                        <div class="sm:basis-1/2 sm:h-full sm:relative text-white ">
                            <h1 class="w-full sm:text-[5vw] text-[15vw] text-left font-bold pt-4">About Me:</h1>
                            <p id="aboutMeInFromLeft" style="transform: translate(-100vw, 0);"  class="sm:inset-y-2/4 sm:absolute text-xl">I'm a sophomore in high school born and raised in Florida. When I'm not studying, I’m either working part-time at lynq or working on my coding projects. I've been interested by how computers work ever since I was young. I'm interested in learning about subjects like AI, quantum computing while in college; while, I taught myself web development. My top choice colleges are Georgia Tech or Brown University and I want to have a future career in the AI field.</p>
                        </div>
                        <div id="aboutMeInFromRight" style="transform: translate(100vw,0);"  class="sm:basis-1/2 h-full sm:pt-0 pt-8 sm:relative w-full ">
                            <div class="sm:absolute sm:inset-x-2/4 sm:inset-y-2/4 w-max m-auto ">
                                <a href="mailto:tockettyler@gmail.com" class="bg-violet-400 p-4 align-middle rounded ring-white/75 hover:ring-white/100 ring text-white text-xl transition">Contact Me</a>
                            </div> 
                        </div>
                    </section>
                    <section id="Gallery" class="bg-[#fff] bg-[url('/angledWaves.svg')] h-[100vh] w-full border-b-4 border-black px-[3vw] flex flex-wrap">
                        <h1 class="w-full sm:text-[5vw] text-[15vw] text-left font-bold pt-4 basis-full text-slate-800 ">Gallery:</h1>
                        <div style="transform: translate(-100vw, 0);"  id="galleryInFromLeft" class="basis-full md:basis-1/2 "><figure class="bg-white p-2 rounded-lg w-fit md:w-min border-2 border-violet-400 m-auto">
                            <img src="/photoshop.png" class="aspect-video md:max-w-[40vw] rounded hover:saturate-150 transition duration-500" />
                            <figcaption class="text-xl text-slate-800 ">Angry Birds Drawing | Adobe Illustrator</figcaption>
                        </figure></div>
                        <div style="transform: translate(100vw, 0);"  id="galleryInFromRight" class="drop-shadow-lg basis-full md:basis-1/2 "><figure class="bg-white p-2 rounded-lg w-fit md:w-min border-2 border-violet-400 m-auto">
                            <img src="/this.png" class="aspect-video md:max-w-[40vw] rounded hover:saturate-150 transition duration-500" />
                            <figcaption class="text-xl text-slate-800 underline"><a target="blank" href="https://github.com/">Responsive Portfolio | Preact | Tailwind (Created in one afternoon)</a></figcaption>
                        </figure></div>
                    </section>
                </main>
                <footer class="h-[10vh] bg-slate-800">
                    <p class="text-white text-xl w-full text-center pt-6">© Tyler Tocket 2023</p>
                </footer>
            </body>`);
        }
    }
    render(html`<${App}/>`, document.body);
