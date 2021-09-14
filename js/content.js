var website_content = {
        "long_bio": `<p>long_bio</p>`,
        "bio": `<p>bio</p>`,
        "two_sigma": `
            <h3><a href="https://www.twosigma.com" contentEditable="false" target="_blank">Two Sigma Securities</a></h3>
            <h4>Hardware Engineering Intern - July to September/2021</h4>
            <ul>
                <li>Working on a novel market data receiver module on an FPGA. Instead of SystemVerilog, this project is being developed using Xilinx's Vitis HLS (high level synthesis) tools and C++.</li>
            </ul>
            <h4>Hardware Engineering Intern - June to August/2020</h4>
            <ul>
                <li>Built a harness on an FPGA to stress test hardware models under extreme network conditions. The project was built using C++ and SystemVerilog.</li>
            </ul>`,
        "hashdex": `
            <h3><a href="https://www.hashdex.com" contentEditable="false" target="_blank">Hashdex</a></h3>
            <h4>Software Engineering and Research Intern - June to September/2019</h4>
            <ul>
                <li>Developed Hashdex’s Order Management System and its exchange integrations from scratch, using C# (.NET). Built the system focusing on quick integration with new exchanges, thus using a hexagonal (“ports and adapters”) architecture.</li>
                <br></br>
                <li>Performed a deep analysis of Bitcoin’s on-chain data, using SQL with Google BigQuery to process over 500 GB of transaction data in order to calculate the network’s realized cap (coinmetrics.io/realized-capitalization) and liveliness, key metrics to understand the market a  nd shift the fund’s strategy to active trading.</li>
            </ul>`,
        "facebook":`
            <h3><a href="https://about.facebook.com/" contentEditable="false" target="_blank">Facebook</a></h3>
            <h4>Software Engineering Intern (FBU program) - June to August/2018</h4>
            <ul>
                <li>Using Java and Node.js, developed a blind dating app, Blind8, for Android mobile devices.</li>
                <br></br>
                <li>The project was selected as the best Android app of the FBU (Facebook University for Engineers) internship program, which led to a private presentation of the project to Mark Zuckerberg.</li>
            </ul>`,
        "pagarme":`
            <h3><a href="https://www.pagar.me/" contentEditable="false" target="_blank">Pagar.me</a></h3>
            <h4>Operations Intern - March to July/2017</h4>
            <ul>
                <li>Wrote Python scripts to automate some of the company's internal tasks, such as chargeback conciliation and sending automatic emails for clients in order to verify and activate accounts. Also worked with monitoring the company's operation using SQL, MongoDB and data analysis on the database.</li>
            </ul>`,
        "undefined": `<h3>Click on a <a href="#" contentEditable="false">link</a> to see more information in this tab or to open up a collapsible menu</h3>`,
        "beetle":`
                    <h3>1973 VW Beetle</h3>
                    <div class="imgContainer">
                        <img src="files/beetleback.png" alt="/">
                    </div>
                        <p>Lately, this VW Beetle (aka Fusca, as it is known in Brazil) has been my main passion and my main side project. As a car guy, the idea of tuning this car up entertained me quite a bit (should I put fuel injectors and write an ECU on a RasPi to control the few electric/electronic systems the car would have?), but given this car has been in the family forever, I decided to appreciate its historical value and try to keep it as close to what it was when it left the factory.</p>
                        <p>When I started working on the car, it wasn't even running. A mechanic who inspected the car suspected that was due to a bad ignition coil. After changing that part and learning some old dog tricks from my dad, such as removing the air filter to pour some gas straight into the carburetor, or hitting the fuel pump with a screwdriver handle to disturb the layer of sediments that could be clogging up the pump, we finally got it to run. But that's where the other problems started.</p>
                        <p>One of the goals of this project was also passing the Brazilian Fusca Club's assessment to get a historical license plate on the car. This meant that aside from all the mechanical issues, I would also have to make sure the car was aesthetically perfect. That meant taking the Beetle to the bodyshop to have some parts repainted, as well as changing the leather panels on the doors, swapping the rusty exhaust pipes for a brand new exhaust system, and getting some rust off the floor panels.</p>
                         <p>After the first trip to the body shop, where the Beetle got a partial paint job and its floor panels clean and protected from rust, I realized that car probably hadn't been through an oil change in a long time. So the next step was getting all of the old, thick engine and transmission oils out and pumping some fresh oil into it. Then I carried on with the quicker, visual fixes to the car: removing the old rusty headlights, painting the headlight housing, putting a new headlight on, making sure all the circuits were properly grounded, switching the old tailights for new ones (while also fighting some small rust), vacuuming the inside of the car, cleaning the doors from the inside, installing new door leather panels, door handles, and window levers, and so on...</p>
                         <p>Once I was pleased with the aesthetics of the car, it was time to fix the mechanical issues. During a preliminary ride around the neighbordhood, I noticed the car wasn't running smoothly, so I assumed the distributor timing was off, or that the spark plugs were too old. After learning a lot from Marcelo Tonella's (the quintessential Fusca connoisseur in Brazil) videos, I put new Bosch spark plus on the car, and also learned how to clean, ground, and adjust the distributor to make sure the car was running well. I also learned more about contact-breaker ignition systems and put on a new contact-breaker and a new rotor on the distributor. By then I realized that coil that got me working on the car in the first place was acrtually too powerful for that type fo dsitributor, so I swapped it out again.</p>
                         <p>Other fixes to the car included installing a new fuel filter (the old one still had a seemingly very ancient VW logo - yikes!), new exhaust pipes, a new fuel pump, and finally removing the horn, rewiring/regrounding it and making sure it wasn't as hard as it was before. This project is going to be one of those never-ending adventures in my life, but nothing else has given so much joy in my college years.</p>
                    `,
        "sobel":`   <h3>Sobel Filter</h3>
                        <p>Used Verilog to improve the performance of the famous Sobel edge-detection operator by building a hardware accelerator on an FPGA, as a final project for EE180 - Digital Systems Architecture.</p>
                        `,
        "mips":`<h3>MIPS Processor on an FPGA</h3>
                <p>Used Verilog to develop a working version of a MIPS processor on a FPGA.</p>
                `,
        "audio":`<h3>Audio Synthesizer</h3>
                    <p>Developed, with Verilog, a full audio synthesizer which is able to play notes and chords with harmonics and effects such as echo.</p>
                `,
        "codedtrack":`<h3>The Coded Track</h3>
                        <p>Made an experimental techno track using climate, earthquake, and college admissions data, by using data science libraries in Python and Sox (Sound Exchange) to turn datasets into audible samples, which were then out together in a track using Ableton. Listen to it <a href="https://soundcloud.com/raul-gd/the-coded-track">here</a>. 
                        `,
        "beatmask":`<h3>BeatMask</h3>
                    <p>TODO</p>
                    `,
        "spinnin":`<h3>Spinnin'</h3>    
                    <p>Stanford's CCRMA Music 250A Final project</p>
                    <div class="videoContainer">
                    <iframe class="video" src="https://www.youtube.com/embed/cbYdDvofAbc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    `,
        "music250a":`<h3>MUSIC 250A Projects</h3>
                        <p>TODO</p>
                    `,
        "fbu":`<h3>Facebook University Best Android App - Blind8</h3>
                <h4>August/2018</h2>
                    <p>Inside the Android Profile Team (manager: Alejandro Martín Nuñez), my team and I used Java and Node.js, to develop a blind dating app, Blind8, for Android mobile devices.</p>
                    <p>The project was selected as the best Android app of the FBU (Facebook University for Engineers) internship program, which led to a private presentation of the project to Mark Zuckerberg.</p>
                    <p>Check out the code <a href="https://github.com/rgdagir/bdate">here.</a></p>`,
        "redbull":`<h3>Red Bull "Hack the Hits" Hackathon Winner<h3>
                    `
                    
}

