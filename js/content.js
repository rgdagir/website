var website_content = {
        "hashdex_ft": `
            <h3><a href="https://www.hashdex.com" contentEditable="false" target="_blank" rel="noopener noreferrer">Hashdex</a></h3>
            <h4>Software Engineer - March to June/2022</h4>
            <ul>
                <li>Part of Hashdex's Platform team, responsible for the core infrastructure.</li>
            </ul>
        `,
        "two_sigma": `
            <h3><a href="https://www.twosigma.com" contentEditable="false" target="_blank" rel="noopener noreferrer">Two Sigma Securities</a></h3>
            <h4>Hardware Engineering Intern - July to September/2021</h4>
            <ul>
                <li>Working on a novel market data receiver module on an FPGA. Instead of SystemVerilog, this project is being developed using Xilinx's Vitis HLS (high level synthesis) tools and C++.</li>
            </ul>
            <h4>Hardware Engineering Intern - June to August/2020</h4>
            <ul>
                <li>Built a harness on an FPGA to stress test hardware models under extreme network conditions. The project was built using C++ and SystemVerilog.</li>
            </ul>`,
        "hashdex": `
            <h3><a href="https://www.hashdex.com" contentEditable="false" target="_blank" rel="noopener noreferrer">Hashdex</a></h3>
            <h4>Software Engineering and Research Intern - June to September/2019</h4>
            <ul>
                <li>Developed Hashdex’s Order Management System and its exchange integrations from scratch, using C# (.NET). Built the system focusing on quick integration with new exchanges, thus using a hexagonal (“ports and adapters”) architecture.</li>
                <br></br>
                <li>Performed a deep analysis of Bitcoin’s on-chain data, using SQL with Google BigQuery to process over 500 GB of transaction data in order to calculate the network’s realized cap (coinmetrics.io/realized-capitalization) and liveliness, key metrics to understand the market a  nd shift the fund’s strategy to active trading.</li>
                </ul>
            `,
        "facebook":`
            <h3><a href="https://about.facebook.com/" contentEditable="false" target="_blank" rel="noopener noreferrer">Facebook</a></h3>
            <h4>Software Engineering Intern (FBU program) - June to August/2018</h4>
            <ul>
                <li>Using Java and Node.js, developed a blind matchmaking app, Blind8, for Android mobile devices.</li>
                <br></br>
                <li>The project was selected as the best Android app of the FBU (Facebook University for Engineers) internship program, which led to a private presentation of the project to Mark Zuckerberg.</li>
                </ul>
            <img src="files/zuck.jpg" alt="/">
            `,
        "pagarme":`
            <h3><a href="https://www.pagar.me/" contentEditable="false" target="_blank" rel="noopener noreferrer">Pagar.me</a></h3>
            <h4>Operations Intern - March to July/2017</h4>
            <ul>
                <li>Wrote Python scripts to automate some of the company's internal tasks, such as chargeback conciliation and sending automatic emails for clients in order to verify and activate accounts. Also worked with monitoring the company's operation using SQL, MongoDB and data analysis on the database.</li>
            </ul>`,
        "undefined": `<h3>Click on a <a href="#" contentEditable="false">link</a> to see more information in this tab or to open up a collapsible menu</h3>`,
        "beetle":`
                    <h3>1973 VW Beetle</h3>
                        <img src="files/beetleback.png" alt="/">
                        <p>Lately, this VW Beetle (aka Fusca, as it is known in Brazil) has been my main passion and my main side project. As a car guy, the idea of tuning this car up entertained me quite a bit (should I put fuel injectors and write an ECU on a RasPi to control the few electric/electronic systems the car would have?), but given this car has been in the family forever, I decided to appreciate its historical value and try to keep it as close to what it was when it left the factory.</p>
                        <p>When I started working on the car, it wasn't even running. A mechanic who inspected the car suspected that was due to a bad ignition coil. After changing that part and learning some old dog tricks from my dad, such as removing the air filter to pour some gas straight into the carburetor, or hitting the fuel pump with a screwdriver handle to disturb the layer of sediments that could be clogging up the pump, we finally got it to run. But that's where the other problems started.</p>
                        <p>One of the goals of this project was also passing the Brazilian Fusca Club's assessment to get a historical license plate on the car. This meant that aside from all the mechanical issues, I would also have to make sure the car was aesthetically perfect. That meant taking the Beetle to the bodyshop to have some parts repainted, as well as changing the leather panels on the doors, swapping the rusty exhaust pipes for a brand new exhaust system, and getting some rust off the floor panels.</p>
                         <p>After the first trip to the body shop, where the Beetle got a partial paint job and its floor panels clean and protected from rust, I realized that car probably hadn't been through an oil change in a long time. So the next step was getting all of the old, thick engine and transmission oils out and pumping some fresh oil into it. Then I carried on with the quicker, visual fixes to the car: removing the old rusty headlights, painting the headlight housing, putting a new headlight on, making sure all the circuits were properly grounded, switching the old tailights for new ones (while also fighting some small rust), vacuuming the inside of the car, cleaning the doors from the inside, installing new door leather panels, door handles, and window levers, and so on...</p>
                         <p>Once I was pleased with the aesthetics of the car, it was time to fix the mechanical issues. During a preliminary ride around the neighbordhood, I noticed the car wasn't running smoothly, so I assumed the distributor timing was off, or that the spark plugs were too old. After learning a lot from Marcelo Tonella's (the quintessential Fusca connoisseur in Brazil) videos, I put new Bosch spark plus on the car, and also learned how to clean, ground, and adjust the distributor to make sure the car was running well. I also learned more about contact-breaker ignition systems and put on a new contact-breaker and a new rotor on the distributor. By then I realized that coil that got me working on the car in the first place was acrtually too powerful for that type fo dsitributor, so I swapped it out again.</p>
                         <p>Other fixes to the car included installing a new fuel filter (the old one still had a seemingly very ancient VW logo - yikes!), new exhaust pipes, a new fuel pump, and finally removing the horn, rewiring/regrounding it and making sure it wasn't as hard as it was before. This project is going to be one of those never-ending adventures in my life, but nothing else has given so much joy in my college years.</p>
                    `,
        "sobel":`   <h3>Sobel filter hardware accelerator</h3>
                        <p>
                            Used Verilog to improve the performance of the famous Sobel edge-detection operator by building a hardware accelerator on an FPGA, as a final project for EE180 - Digital Systems Architecture. The top-level hardware block diagram of this system, extracted from EE180 course files, is included below. 
                        </p>
                        <br>
                        <img src="files/sobel_accelerator.png" />
                        <br>
                        <p>
                            In this accelerator, the host transfers the image to the accelerator by putting it in the memory buffer. The accelerator then applies the Sobel filter across the whole image and stores the output on the outgoing memory buffer, then tells the host the image has been processed and can be fetched back.
                        </p>
                        `,
        "mips":`<h3>MIPS Processor on an FPGA</h3>
                    <p>
                        As part of the EE180 - Digital Systems Architecture course at Stanford, I developed a MIPS processor on an FPGA using Verilog. The version implemented for the class implemented all basic MIPS instructions, and included hazard detection, forwarding, and stall control features. The diagram for the processor, extracted from the class slides put together by Prof. Christoforos Kozyrakis and George Michelogiannakis, is shown below:
                    </p>
                    <br>
                    <img src="files/pipelined_mips_processor.png" />
                `,
        "audio":`<h3>Audio Synthesizer</h3>
                    <p>
                        As part of the EE108 - Digital Systems Design course at Stanford, my team and I developed an audio synthesizer on an FPGA using Verilog.
                    </p>
                    <p>
                       This audio synthesizer consisted of 3 main modules, which can be seen on the block diagram below: an MCU (master control unit), a song reader, and a note player. The MCU processes the user inputs (via the buttons on the Zedboard, our development board) and decides which song will be played as well as whether the song should be played or paused. Once a song is selected, the song reader starts reading from a ROM that contains the sequence of notes for that selected song, and passes that information down to the note player. The note player receives a note to be played for a certain duration, reads from a ROM that contains the frequency ("step") for that note, and passes that information down to the sine reader. At the lowest level, within the note player, there is an additional module to build the soundwaves, the sine reader. The sine reader takes a "step" parameter from the note player, which defines the frequency of the sine wave ot be built. This "step" parameter determines how fast the sine reader will read the sine ROM and extract its samples, which in turn will be used to build a wave.
                       </p>
                    <br>
                    <img src="files/audio_synth_block_diagram.png" alt="This diagram was extracted from the lab notes for EE108" />
                    <p>
                       As part of our final project, we improved on this basic audio synthesizer by implementing echo effects, chords (multiple notes being played at the same time), and harmonics. 
                    </p>
                `,
        "codedtrack":`<h3>The Coded Track</h3>
                    <p>
                        Made an experimental techno track by transforming the graphs of temperature peaks, earthquake intensity, and college admission numbers into audible waveforms using data science libraries in Python and Sox (Sound Exchange), which were then combined to build the track below.
                    </p>
                    <div class="videoContainer">
                        <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/456723894&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/raul-gd" title="Raul GD" target="_blank" style="color: #cccccc; text-decoration: none;">Raul GD</a> · <a href="https://soundcloud.com/raul-gd/the-coded-track" title="The Coded Track" target="_blank" style="color: #cccccc; text-decoration: none;">The Coded Track</a></div>
                    </div>

                        `,
        "beatmask":`<h3>BeatMask</h3>
                    <p>
                        BeatMask is a spray painting mask that allows beatboxers to convert their impromptu vocal beats into MIDI clips within Ableton in real time. Inside the mask, which we used to isolate the beatboxing from external sounds, there is a microphone. The sounds captured by the microphone are processed by an Arduino connected to the BeatMask, and subsequently thrown into a classifies model built using Max/MSP, which in turn is connected to Ableton, where the MIDI clips are generated in real-time, allowing for artists and performers to mix and loop their beats on the go. 
                    </p>
                    <p>
                        My team (Claire Lim and Alexina Boudreaux-Allen) and I won the highly-selective 2018 edition of Red Bull's Hack the Hits Hackathon with this project. The project was <a href="https://dailytrojan.com/2018/10/30/student-wins-award-for-building-dj-mask/">featured in the Daily Trojan</a>, in an interview with Alexina.
                    </p> 
                    <img src="files/beatmask.jpg" alt="/">
                    <br>
                    <img src="files/raul_beatmask.jpg" alt="/">
                    
                    `,
        "spinnin":`<h3>Spinnin'</h3>    
                     <p>Stanford's CCRMA Music 250A Final project. As a DJ, I feel heavily limited by the tools at my disposal. Currently, DJ controllers come with a myriad of features, that are taken advantage by DJ mixing software incredibly. However, I always found incredibly hard to include external samples to create a more personalized experience that goes beyond simply preparing mixes and transitioning between them live. This project was an experiment at building an instrument that resembles a jog wheel, but includes Launchpad-like features, like clicking a button to play a sample, integrated with the extra degree of freedom that spinning the wheel gives the DJ/performer, a feature inspired in the <a href="https://en.wikipedia.org/wiki/Continuum_Fingerboard" target="_blank" rel="noopener noreferrer">Continuum</a>, an instrument made famous by American keyboardist Jordan Rudess.</p>
                     <p>In this project, I ended up focusing on the technical aspect a lot more than I should have, which meant the artistic/performance aspect of it was not developed to the extent I imagined I could achieve. I explain the technical side of this project and demo the final product in the video below:</p>
                    <div class="videoContainer">
                        <iframe class="video" src="https://www.youtube.com/embed/cbYdDvofAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    `,
        "music250a":`<h3>MUSIC 250A Projects</h3>
                        <p>
                        MUSIC 250A - Physical Interaction Design for Music, is a class taught at CCRMA (Center for Computer Research in Music and Acoustics) at Stanford, whose purpose is to teach students how to use electronics to build novel instruments and musical interfaces. In this edition of the class, we used boards such as Arduinos and Teensys, and <a href="https://faust.grame.fr/" target="_blank" rel="noopener noreferrer">Faust</a> as the software component for signal processing and audio generation. Everything in the class was experimental, as one of the goals was also to exercise our creativity.
                        </p>
                        <br>
                        <p>Spinnin': check out this project in the Spinnin' tab on this menu.</p>
                        <br>
                        <p>
                        Flat launchpad: using copper tape to build a multiplexed grid in which each intersection would be analogous to a button in a <a href="https://novationmusic.com/en/launch/launchpad-x" target="_blank" rel="noopener noreferrer">Novation Launchpad</a> (once one presses down on the intersection, a sample should be played or modified according to how the "flat launchpad" is programmed). The goal was to build a versatile, programmable instrument, while also experimenting with copper tape and capacitive touch sensors connected to the tape. 
                        </p>
                        <div class="videoContainer">
                            <iframe class="video" src="https://www.youtube.com/embed/wpxAeZ3y-Hs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <br>
                        <p>
                        Decomposed Guitar: this is my attempt at building a decomposed guitar. The idea was not to build an instrument that sounded like a guitar, but a new musical interface that shared the same principles. 
                        </p>
                        <div class="videoContainer">
                            <iframe class="video" src="https://www.youtube.com/embed/qxfqPsygxV4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <br>
                        <div class="videoContainer">
                            <iframe class="video" src="https://www.youtube.com/embed/ilYqhp6O24U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                        <br>
                        <p>
                        Experimenting with Piezos: in this project, my goal was to use bullet shells of different shapes and sizes (found at the CCRMA lab when I was perusing through all the available materials), as well as a piezo microphone to capture the reverberations in the bullets in order to build a different percussion instrument. 
                        </p>
                        <div class="videoContainer">
                            <iframe class="video" src="https://www.youtube.com/embed/sxIkCh4p7vU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    `,
        "fbu":`<h3>Facebook University Best Android App</h3>
                <h4>August/2018</h2>
                    <p>Inside the Android Profile Team (manager: Alejandro Martín Nuñez), my team and I used Java and Node.js, to develop a blind matchmaking app, Blind8, for Android mobile devices.</p>
                    <p>The project was selected as the best Android app of the FBU (Facebook University for Engineers) internship program, which led to a private presentation of the project to Mark Zuckerberg.</p>
                    <p>Check out the code <a href="https://github.com/rgdagir/bdate" target="_blank" rel="noopener noreferrer">here.</a></p>
                    <img src="files/zuck.jpg" alt="/">
                    `,
        "redbull":`<h3>Red Bull "Hack the Hits" Hackathon Winner</h3>
                    <p>
                        For the 2018 edition of the highly-selective music+tech hackathon Hack The Hits, hosted by Red Bull, my team (Claire Lim and Alexina Boudreaux-Allen) won the contest with our project BeatMask, which is featured in the "pslog" menu in this website. Basically, BeatMask is a spray painting mask that allows beatboxers to convert their impromptu vocal beats into MIDI clips within Ableton in real time. 
                    </p> 
                    <img src="files/raul_beatmask.jpg" alt="/">
                    `,
        "ambev": `
                <h3>AB InBev's Hack the World Hackathon Winner</h3>
                <p>
                    In 2017, a few friends from POLI-USP and from Stanford got together to work on AB Inbev's hackathon challenge. The hackathon was centered around the experience of drinking beer, so we developed the concept of an app to gamify the discovery of new craft beers and new bars in São Paulo, Brazil serving craft beer. More on the project can be found <a href="https://github.com/tobyshooters/byob">here</a>.
                </p>
                <img src="files/ambev.jpeg" alt="/">
                `,
        "ssi":`
                <h3>Unofficial World Record for Longest Latex Baloon flight</h3>
                <p>
                    In 2017, the Balloons team within SSI (Stanford Student Space Initiative) launched one iteration of ValBal - short for valve and ballast - an autonomous balloon that vent gas or drops ballast according to changes in temperature/pressure to keep the balloon aloft for as long as possible. For this project, I was responsible for redesigning the breakout board PCB, which allowed us to charge and flash the balloon's main board with new code. This flight, code SSI-63 stayed aloft for 121 hours, unofficially breaking the world record for the longest latex balloon flight before it landed in New Mexico after running out of ballast. Telemetry is shown below:
                </p>
                <img src="files/ssi63habmc.jpeg" />
                <br>
                <img src="files/ssi63.jpg" />
                <br>
                <img src="files/breakout.jpg" />
                <br>
                <img src="files/breakout_back.jpg" />
                `,
        "fe":`
                <h3><a href="https://lideres.estudar.org.br/">Fundação Estudar</a> Fellow</h3>
                <p>
                    Selected as one of the 33 undergraduate and graduate students among 80,000 candidates as Fundação Estudar's Fellows/Líderes.
                </p>
                <br>
                <div class="videoContainer">
                    <iframe class="video" src="https://www.youtube.com/embed/gmFFKIKqgsg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                `,
        "claralionel":`
                <h3><a href="https://claralionelfoundation.org/">Clara Lionel Foundation</a> Scholar</h3>
                <p>Selected to receive a fellowship from Clara Lionel Foundation, founded and backed by Rihanna.</p>
                <div class="videoContainer">
                    <iframe class="video" src="https://www.youtube.com/embed/Dyi1zTeMoIE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>`
}

