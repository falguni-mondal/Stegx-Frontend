import { Link } from 'react-router-dom';
import Section from './Section'
import { IoIosLink } from "react-icons/io";

const About = () => {

    const breakTag = <br />;
    const motive = <strong>Create a tool that is simple for users, yet extremely difficult to break, even for those who suspect that hidden data exists.</strong>;

    return (
        <section className='about-section text-[#bbaad6] p-3 lg:px-10 lg:pt-24 font-helv flex justify-center overflow-hidden'>
            <div className="content bg-[#a898e021] backdrop-blur-sm rounded-3xl p-5 lg:p-10 lg:max-w-[60vw] max-h-[90vh] lg:max-h-[80vh] overflow-y-scroll">

                <Section heading={"overview"} para1={"Stegx is a powerful and intuitive web application designed to perform encryption-based image steganography. It allows users to securely hide secret messages inside images using a highly secure, custom-developed algorithm that manipulates pixel-level data without noticeably altering the visual appearance of the image."} para2={"Built with a strong focus on security, usability, and innovation, Stegx provides an end-to-end encryption-decryption workflow where the message is converted into a secure binary form and embedded deep within the image data. This process is done entirely on the web, making it accessible and easy to use while maintaining a high standard of cryptographic protection."} />

                <div className={`inspiration mb-14`}>
                    <h1 className='about-heading w-full text-[2.5rem] leading-none font-bold mb-3 capitalize'>inspiration</h1>
                    <p className="about-paragraph text-[1.2rem] leading-[1.2] lg:text-justify">
                        The idea for Stegx was born from a deep curiosity about how digital information can be hidden in plain sight, combined with a passion for solving real-world problems through code. In a world where privacy is increasingly at risk and communication is constantly monitored, there’s a growing need for methods that allow people to share sensitive information discreetly—without raising suspicion or compromising security.
                        <br /><br />
                        Traditional encryption is powerful, but its output often looks suspicious: garbled text, unreadable formats, or strange files. Steganography, on the other hand, offers a clever alternative—hiding the existence of the message altogether. This subtlety fascinated us.
                        <br /><br />
                        What started as a simple experiment with basic steganographic techniques evolved into something much more ambitious. We wanted to go beyond the usual Least Significant Bit (LSB) methods and build something that would not only conceal data but also protect it with a custom, layered encryption process that could stand up to real analysis.<br />The goal was clear : <br /><span className='text-[#d7d5da]'>Create a tool that is simple for users, yet extremely difficult to break, even for those who suspect that hidden data exists.</span>
                        <br /><br />
                        Stegx was developed to bring this vision to life—a modern, secure, and user-friendly steganography tool that proves how creative thinking, math, and code can be combined to build meaningful security solutions.
                        <br /><br />
                        It’s more than just a project. It’s a statement :<br />
                        <span className='text-[#d7d3db]'>Security doesn’t always have to be loud. Sometimes, the best way to protect something is to make sure no one even knows it’s there.</span>
                    </p>
                </div>

                <div className={`uniqueness mb-14`}>
                    <h1 className='about-heading w-full text-[2.5rem] leading-none font-bold mb-3 capitalize'>uniqueness</h1>
                    <p className="about-paragraph text-[1.2rem] leading-[1.2] lg:text-justify">
                        While many steganography tools exist today, most rely on basic techniques that are either easily detectable or lack proper encryption. Stegx stands apart by combining steganography with custom-built encryption logic, delivering a much higher level of security and sophistication without sacrificing ease of use.
                        <br /><br />
                        <h2 className='heading-2nd mb-3 font-bold tracking-wide'>🔐 Custom Encryption Before Embedding</h2>
                        <span className='inline-block lg:pl-7'>
                            Unlike standard tools that directly hide plain text in image pixels, Stegx encrypts the message using a multi-step custom algorithm before embedding it. This makes the hidden data useless and unreadable unless decrypted with the exact key.
                        </span>
                        <br /><br />
                        <h2 className='heading-2nd mb-3 font-bold tracking-wide'>🧠 Intelligent Key Generation</h2>
                        <span className='inline-block lg:pl-7'>
                            Each operation in Stegx produces a unique decryption key that encodes essential details required to reverse the process—without revealing anything meaningful on its own. The key structure is intentionally obfuscated, making reverse-engineering impractical.
                        </span>
                        <br /><br />
                        <h2 className='heading-2nd mb-3 font-bold tracking-wide'>🧩 Deep Pixel Manipulation with High Fidelity</h2>
                        <span className='inline-block lg:pl-7'>
                            The encrypted data is embedded at the binary level of RGB pixel values, ensuring that the image remains visually identical while carrying an encrypted payload. This advanced method makes detection via statistical or visual analysis extremely difficult.
                        </span>
                        <br /><br />
                        <h2 className='heading-2nd mb-3 font-bold tracking-wide'>🚫 Difficult to Brute-Force</h2>
                        <span className='inline-block lg:pl-7'>
                            With a breaking complexity greater than <span className='text-[#d7d5da] text-[1.25rem]'>429,49,67,29,83,66 (4.2 bilion)</span>, Stegx is not vulnerable to common brute-force or dictionary attacks. Without the exact encryption parameters and key, decryption is computationally infeasible—even for attackers who suspect something is hidden.
                        </span>
                        <br /><br />
                        <h2 className='heading-2nd mb-3 font-bold tracking-wide'>🌐 100% Web-Based, No Installation</h2>
                        <span className='inline-block lg:pl-7'>
                            Stegx runs entirely in the browser. No software installation, no data stored on servers—everything happens client-side, giving users complete control and privacy.
                        </span>
                    </p>
                </div>

                <div className={`system-overview mb-14`}>
                    <h1 className='about-heading w-full text-[2.5rem] leading-none font-bold mb-3 capitalize'>system overview</h1>
                    <p className="about-paragraph text-[1.2rem] leading-[1.2] lg:text-justify">
                        Stegx is built around a secure and carefully layered architecture that transforms textual information into an encrypted binary format and embeds it within an image using pixel-level manipulation. The entire process is designed to be lightweight, browser-accessible, and highly secure, ensuring ease of use without compromising the integrity of the hidden message.
                        <br /><br />
                        At its core, Stegx follows a three-phase flow: Input Handling → Encryption & Embedding → Output & Key Generation. Each phase plays a critical role in maintaining the confidentiality, accuracy, and reversibility of the steganographic process.
                        <br /><br />
                        <ol className='list-decimal pl-7'>
                            <li>
                                <h2 className='mb-2 font-bold tracking-wide'>Input Handling</h2>
                                The system begins by accepting two user inputs:

                                <ul className='list-disc pl-10'>
                                    <li>A cover image (the image in which the message will be hidden)</li>
                                    <li>A text message (the secret information to be concealed)</li>
                                </ul>
                                <br />
                                Before proceeding, the system checks for:
                                <ul className='list-disc pl-10'>
                                    <li>Validity of the image file (PNG in this case.)</li>
                                    <li>Length and size compatibility between the message and image capacity</li>
                                    <li>Cleaned and normalized input to ensure proper encryption</li>
                                </ul>
                            </li>
                            <li className='mt-10'>
                                <h2 className='mb-2 font-bold tracking-wide'>Encryption & Embedding (Black Box View)</h2>
                                This is the heart of the system where the actual steganographic transformation happens. Without revealing internal logic, the process can be described in the following way:

                                <ul className='list-disc pl-10'>
                                    <li>The message is converted into a numeric form, pre-processed using mathematical operations, and encrypted using a dynamically generated random value.</li>
                                    <li>The result is a binary payload that represents the encrypted version of the message.</li>
                                    <li>This binary data is embedded into the RGB channels of selected image pixels using a precise bit-level modification technique, specifically targeting the least significant bits to ensure the image’s appearance remains unchanged to the human eye.</li>
                                </ul>
                                <br />
                                The embedding is designed to be:
                                <ul className='list-disc pl-10'>
                                    <li>Randomized to avoid patterns</li>
                                    <li>Irreversible without complete knowledge of the encryption key</li>
                                    <li>Undetectable using common steganalysis methods</li>
                                </ul>
                            </li>
                            <li className='mt-10'>
                                <h2 className='mb-2 font-bold tracking-wide'>Output Generation & Key Management</h2>
                                Once the message is successfully embedded:

                                <ul className='list-disc pl-10'>
                                    <li>A new stego-image is generated and provided to the user for download</li>
                                    <li>Alongside, a unique decryption key is generated which contains critical parameters required to reverse the process</li>
                                </ul>
                                <br />
                                The key includes:
                                <ul className='list-disc pl-10'>
                                    <li>A hexadecimal-encoded version of the random masking value used in encryption</li>
                                    <li>Metadata like message length and encryption factors</li>
                                    <li>All key parts are separated using non-hex characters to obscure their structure and prevent unauthorized extraction</li>
                                </ul>
                                <br />
                                This key must be securely stored by the user, as it is the only way to decrypt the message hidden in the image.
                            </li>
                            <li className='mt-10'>
                                <h2 className='mb-2 font-bold tracking-wide'>Decryption (Reverse Flow)</h2>
                                Users with access to the stego-image and the correct key can perform the reverse operation:

                                <ul className='list-disc pl-10'>
                                    <li>The system extracts the modified pixel values</li>
                                    <li>Reconstructs the embedded binary payload</li>
                                    <li>Reverses the encryption transformation using the exact same random and calculated values</li>
                                    <li>Finally, retrieves the original message with full accuracy</li>
                                </ul>
                                <br />
                                If any part of the key is incorrect, the system will fail to produce a valid output—ensuring that even small deviations result in complete message loss, reinforcing data confidentiality.
                            </li>
                        </ol>
                    </p>
                </div>

                <div className={`security mb-20`}>
                    <h1 className='about-heading w-full text-[2.5rem] leading-none font-bold mb-3 capitalize'>security</h1>
                    <p className="about-paragraph text-[1.2rem] leading-[1.2] lg:text-justify">
                        At the heart of Stegx lies a commitment to robust, intelligent, and tamper-resistant security. Unlike basic steganography tools that simply insert data into the least significant bits of an image, Stegx takes it a step further—encrypting the message through multiple transformations before embedding it into the image. This layered approach ensures that even if someone identifies that an image is suspicious, they cannot extract or interpret the hidden message without the correct decryption key.
                        <br /><br />
                        <h2 className='mb-5 font-bold tracking-wide text-[1.4rem]'>Key security highlights</h2>
                        <ul className='list-disc pl-7'>
                            <li className="mb-5">
                                <h3 className='mb-2 font-bold tracking-wide'>Custom unique algorithm :</h3>
                                <p>Before embedding any message, Stegx encrypts it using a multi-step algorithm that introduces randomness, mathematical transformations, and non-linear logic. This ensures the data is unreadable in its embedded form and protected against known steganalysis methods.</p>
                            </li>
                            <li className="mb-5">
                                <h3 className='mb-2 font-bold tracking-wide'>Decryption Key Dependency :</h3>
                                <p>A uniquely generated key is required to decrypt any hidden message. This key includes critical values like encryption multipliers and binary masks, but these are disguised within the key using a custom format that prevents easy parsing or reverse engineering. Without the exact key, decryption is virtually impossible.</p>
                            </li>
                            <li className="mb-5">
                                <h3 className='mb-2 font-bold tracking-wide'>High Brute-Force Complexity :</h3>
                                <p>With a breaking complexity exceeding <span className='text-[1.25rem]'>429,49,67,29,83,66 (4.2 bilion)</span>, the system is resistant to brute-force attacks. The key space is large and randomized, making exhaustive search methods computationally infeasible.</p>
                            </li>
                            <li className="mb-5">
                                <h3 className='mb-2 font-bold tracking-wide'>Obfuscation of Parameters :</h3>
                                <p>All essential encryption parameters are mixed with non-hex characters in the key, making it unreadable without the internal logic of Stegx. This prevents attackers from extracting usable hints from the key format alone.</p>
                            </li>
                            <li className="mb-5">
                                <h3 className='mb-2 font-bold tracking-wide'>Stealth by Design :</h3>
                                <p>The message is embedded in a way that doesn’t alter the visible quality of the image, making the existence of hidden data nearly undetectable to the naked eye and resistant to histogram and pixel-based detection.</p>
                            </li>
                            <li>
                                <h3 className='mb-2 font-bold tracking-wide'>One-Time Key System :</h3>
                                <p>Each encryption session uses a fresh random binary mask, ensuring that even the same message embedded in the same image will produce a different encrypted output and key every time. This enhances unpredictability and security.</p>
                            </li>
                        </ul>
                    </p>
                </div>

                <div className={`real-world-use mb-20`}>
                    <h1 className='about-heading w-full text-[2.5rem] leading-none font-bold mb-3 capitalize'>real-world use</h1>
                    <p className="about-paragraph text-[1.2rem] leading-[1.2] lg:text-justify">
                        In today’s digital age, where data privacy is under constant threat and online surveillance is increasingly common, the need for secure and discreet communication methods is more critical than ever. Stegx addresses this challenge by offering a practical, easy-to-use tool that hides sensitive information within everyday images, making private communication possible—even across public platforms.
                        <br /><br />

                        Unlike typical encryption tools that simply scramble text, Stegx embeds the encrypted message directly into the pixels of an image. This not only conceals the content but also the very fact that a message exists. The result is a highly secure and subtle form of communication that blends seamlessly into modern digital workflows.
                        <br /><br />
                        <h2 className='mb-5 font-bold text-[1.4rem]'>How?</h2>
                        <ul className='list-disc pl-7'>
                            <li className="mb-5">
                                <h3 className='mb-2 font-bold tracking-wide'>Private Conversations in Public Channels</h3>
                                <p>Users can share steganographically encoded images through social media, email, or cloud platforms. Even if intercepted, the image looks completely normal to unintended viewers.</p>
                            </li>
                            <li className="mb-5">
                                <h3 className='mb-2 font-bold tracking-wide'>Educational Demonstrations & Academic Research</h3>
                                <p>Stegx serves as a great educational tool for students, researchers, and cybersecurity enthusiasts to explore how encryption and image processing can work together to create advanced steganography systems.</p>
                            </li>
                            <li className="mb-5">
                                <h3 className='mb-2 font-bold tracking-wide'>Digital Rights and Content Ownership</h3>
                                <p>Creators can embed invisible identifiers or digital signatures inside images to claim ownership or track misuse of their content.</p>
                            </li>
                            <li className="mb-5">
                                <h3 className='mb-2 font-bold tracking-wide'>Secure File Transfers</h3>
                                <p>Organizations and individuals can use Stegx to embed confidential codes, internal references, or access keys into images for added security during file exchanges.</p>
                            </li>
                            <li className="mb-5">
                                <h3 className='mb-2 font-bold tracking-wide'>Forensic and Investigative Use</h3>
                                <p>In investigative environments, professionals may use tools like Stegx to conceal information in plain sight when operating in high-risk or monitored environments.</p>
                            </li>
                            <li>
                                <h3 className='mb-2 font-bold tracking-wide'>Password and Key Distribution</h3>
                                <p>Instead of storing or sharing raw keys or credentials, Stegx can hide them inside a harmless-looking image—adding an extra layer of protection.</p>
                            </li>
                        </ul>
                    </p>
                </div>

                <div className={`user-privacy mb-20`}>
                    <h1 className='about-heading w-full text-[2.5rem] leading-none font-bold mb-3 capitalize'>user privacy</h1>
                    <p className="about-paragraph text-[1.2rem] leading-[1.2] lg:text-justify">
                        At Stegx, user privacy is treated with utmost importance. While the platform uses a backend server to perform the encryption and embedding operations, none of the user-provided data is ever stored or retained after processing.
                        <br /><br />

                        <h2 className='mb-5 font-bold text-[1.4rem] tracking-wide'>The Handling :</h2>
                        <ul className='list-disc pl-7'>
                            <li className="mb-5">
                                <h3 className='mb-2 font-bold tracking-wide'>Temporary Server Processing</h3>
                                <p>When you input the image and message, the data is temporarily sent to a secure backend server. The server performs the encryption algorithm and image processing, then immediately sends back the encrypted image and decryption key.</p>
                            </li>
                            <li className="mb-5">
                                <h3 className='mb-2 font-bold tracking-wide'>No Permanent Storage</h3>
                                <p>Stegx does not store your message, image, or generated key in any database or persistent storage. Once the response is sent to your browser, all associated data is deleted from the server immediately.</p>
                            </li>
                            <li className="mb-5">
                                <h3 className='mb-2 font-bold tracking-wide'>No User Account Required</h3>
                                <p>Stegx doesn’t require sign-ups or logins. No personal information is collected during usage.</p>
                            </li>
                            <li className="mb-5">
                                <h3 className='mb-2 font-bold tracking-wide'>No Tracking or Analytics</h3>
                                <p>The application does not track your activity, store usage logs, or monitor content in any way.</p>
                            </li>
                            <li className="mb-5">
                                <h3 className='mb-2 font-bold tracking-wide'>End-to-End Privacy Responsibility</h3>
                                <p>Once the encrypted image and key are returned, you are solely responsible for downloading and safeguarding them. Without the correct key, the encrypted image remains completely undecipherable—even to us.</p>
                            </li>
                        </ul>
                    </p>
                </div>

                <Section heading={"Challenges faced during development"} para1={"Building Stegx was a technically rewarding yet challenging journey. One of the earliest hurdles was designing an encryption algorithm that goes beyond the standard LSB (Least Significant Bit) approach. It wasn’t just about hiding data—it was about doing so in a way that would be extremely difficult to reverse-engineer without the correct key. Striking a balance between complexity and performance was a recurring challenge, especially when working with bitwise operations and binary arithmetic at scale. Ensuring that the algorithm added sufficient randomness while still being reversible through a key took several iterations and careful logic design."} para2={"Another major challenge was preserving the visual integrity of the image while embedding data. Since the RGB color values of each pixel were being altered at the binary level, even a slight miscalculation could result in noticeable distortion or color shift. Extensive testing was required to confirm that the image would remain visually identical after embedding, regardless of the size of the hidden message."} para3={"Managing fixed-length binary conversions, handling negative numbers, and making the algorithm compatible with a variety of image sizes and dimensions posed additional difficulties. The system had to be robust enough to embed and extract data reliably even in edge cases—such as extremely short messages or very small images—without breaking or throwing errors."} para4={"Another layer of complexity arose during the development of the decryption process. Because the encryption algorithm involved mathematical transformations that depend on both the message and a randomly generated value, the decryption logic had to perfectly mirror the encryption steps in reverse. Any mismatch in how numbers were transformed, padded, or converted could lead to completely unreadable results."} para5={"From a backend perspective, image processing through libraries like Jimp had its own limitations. Performance issues surfaced when dealing with larger images or high-resolution inputs, requiring code-level optimizations to maintain acceptable processing speed without overloading server resources. Additionally, maintaining image quality during read-write operations, while manipulating individual pixels precisely, was a non-trivial task."} para6={"Finally, designing a secure but user-friendly decryption key format was unexpectedly tricky. The key needed to contain all the required components to reverse the encryption, yet its structure had to be obfuscated enough to resist pattern recognition or brute-force attempts. This meant creating a custom key format that mixed essential values with non-hex characters to confuse potential attackers while still keeping it parseable by the system."} />

                <div className={`technologies mb-20`}>
                    <h1 className='about-heading w-full text-[2.5rem] leading-none font-bold mb-3 capitalize'>Technologies used</h1>
                    <p className="about-paragraph text-[1.2rem] leading-[1.2] lg:text-justify">
                        The development of Stegx involved a modern and efficient tech stack, combining powerful frontend and backend tools to ensure smooth performance, real-time processing, and secure handling of image data.
                        <br /><br />

                        <h2 className='mb-3 font-bold text-[1.4rem] tracking-wide'>Frontend</h2>
                        <ul className='list-disc pl-7 mb-8'>
                            <li>
                                <h3 className='inline font-semibold tracking-wide'>React.js</h3>
                                <p className='inline'> – Used to build a dynamic and responsive user interface with a component-based architecture.</p>
                            </li>
                            <li>
                                <h3 className='inline font-semibold tracking-wide'>Vite</h3>
                                <p className='inline'> – Provided a lightning-fast development environment and optimized build system for React.</p>
                            </li>
                            <li>
                                <h3 className='inline font-semibold tracking-wide'>Tailwind CSS</h3>
                                <p className='inline'> – Enabled rapid UI styling with a utility-first approach, ensuring a clean and responsive design across devices.</p>
                            </li>
                        </ul>

                        <h2 className='mb-3 font-bold text-[1.4rem] tracking-wide'>Backend</h2>
                        <ul className='list-disc pl-7 mb-8'>
                            <li>
                                <h3 className='inline font-semibold tracking-wide'>Node.js</h3>
                                <p className='inline'> – Served as the runtime environment for handling server-side logic and asynchronous operations.</p>
                            </li>
                            <li>
                                <h3 className='inline font-semibold tracking-wide'>Express.js</h3>
                                <p className='inline'> – A minimalist web framework used to create the backend API endpoints for encryption and image handling.</p>
                            </li>
                        </ul>

                        <h2 className='mb-3 font-bold text-[1.4rem] tracking-wide'>Image Processing & File Handling</h2>
                        <ul className='list-disc pl-7 mb-8'>
                            <li>
                                <h3 className='inline font-semibold tracking-wide'>Jimp</h3>
                                <p className='inline'> – Used for manipulating images at the pixel level, allowing the embedding and extraction of hidden messages.</p>
                            </li>
                            <li>
                                <h3 className='inline font-semibold tracking-wide'>Multer</h3>
                                <p className='inline'> – Middleware used for handling image file uploads from the client side to the server securely and efficiently.</p>
                            </li>
                        </ul>
                    </p>
                </div>

                <div className={`limitations mb-14`}>
                    <h1 className='about-heading w-full text-[2.5rem] leading-none font-bold mb-3 capitalize'>Be Careful</h1>
                    <p className="about-paragraph text-[1.2rem] leading-[1.2] lg:text-justify">
                        While Stegx is designed to offer a high level of security and ease of use, like any software system, it comes with a few limitations that are important to acknowledge. These limitations do not affect its core functionality but may influence how and where it is best applied.
                        <br /><br />

                        <ul className='list-disc pl-7'>
                            <li className="mb-5">
                                <h3 className='mb-2 font-semibold tracking-wide'>Message Size</h3>
                                <p>The amount of data that can be hidden is directly dependent on the number of pixels available in the image. Larger messages require higher-resolution images to store them effectively. Trying to embed a long message into a small image will result in failure or message truncation.</p>
                            </li>
                            <li className="mb-5">
                                <h3 className='mb-2 font-semibold tracking-wide'>Image File</h3>
                                <p>As of now, Stegx supports only .png image format. Other image formats or media types like audio, video, or PDFs are not supported for data embedding.</p>
                            </li>
                            <li className="mb-5">
                                <h3 className='mb-2 font-semibold tracking-wide'>File Compression</h3>
                                <p>Images processed by Stegx should not be compressed or re-encoded (for example, by uploading to certain social media platforms), as lossy compression can destroy the embedded data. This makes Stegx unsuitable for scenarios where image integrity cannot be preserved after embedding.</p>
                            </li>
                            <li className="mb-5">
                                <h3 className='mb-2 font-semibold tracking-wide'>Decryption Key</h3>
                                <p>The decryption process depends on a precise combination of values provided in the key (including a random binary, average, and message length). If any part of the key is incorrect or missing, the message cannot be recovered, and the result will be meaningless.</p>
                            </li>
                            <li className="mb-5">
                                <h3 className='mb-2 font-semibold tracking-wide'>Recovery</h3>
                                <p>If the image is modified after encryption or if the key is slightly wrong, there is no way to detect or recover partial data. The system is all-or-nothing by design, prioritizing security over fault tolerance.</p>
                            </li>
                            <li className="">
                                <h3 className='mb-2 font-semibold tracking-wide'>Web Performance</h3>
                                <p>Being a browser-based tool, Stegx may face performance limitations when handling very large images or extremely long messages, especially on devices with low memory or processing power.</p>
                            </li>
                        </ul>
                        <br /><br />
                        Despite these limitations, Stegx remains a robust proof-of-concept and practical tool for real-world steganography, especially when used with proper understanding and care in appropriate contexts. Future versions may address some of these constraints with added flexibility and improved error handling.
                    </p>
                </div>

                <div className={`credits mb-14`}>
                    <h1 className='about-heading w-full text-[2.5rem] leading-none font-bold mb-3 capitalize'>Credits</h1>
                    <p className="about-paragraph text-[1.2rem] leading-[1.2] lg:text-justify">

                        <h2 className='mb-3 font-bold text-[1.4rem] tracking-wide'>Acknowledgements & Historical Steganography</h2>
                        <ul className='list-disc pl-7 mb-8'>
                            <li className='mb-3'>
                                <h3 className='font-semibold tracking-wide'>Johannes Trithemius (1462–1516)</h3>
                                <p>Often regarded as the father of modern steganography, his book Steganographia (written 1499, published 1606) laid early theoretical foundations for hiding messages in plain sight.</p>
                            </li>
                            <li className='mb-3'>
                                <h3 className='font-semibold tracking-wide'>LSB Steganography – Romana “Cypherella” Machado</h3>
                                <p>In the early 1990s, Machado introduced an LSB-based steganography tool called Stego for Macintosh, which masked messages inside the least significant bits of image pixels—a technique that underpins much of digital image steganography today.</p>
                            </li>
                            <li>
                                <h3 className='font-semibold tracking-wide'>Academic & Research Contributions</h3>
                                <p>Numerous adaptive LSB variations, edge-adaptive techniques, and multi-domain transformations have been explored in literature—for instance, embedding in edge/smooth areas, spatial vs. frequency domain methods, wavelet-based embedding, and hybrid encryption-LSB combinations</p>
                            </li>
                        </ul>

                        <h2 className='mb-3 font-bold text-[1.4rem] tracking-wide'>Project-Specific Credits</h2>
                        <h3 className='font-semibold underline tracking-wide'>Core Algorithm Innovators</h3>
                        <p>The encryption and embedding logic that powers Stegx is entirely custom-built. The core algorithm was developed from scratch by the following contributors:</p>
                        <ul className='list-disc pl-7 mb-8 mt-5'>
                            <li className="mb-2">Aditya Sharma (Uni Roll: 12500222121)</li>
                            <li className="mb-2">Aman Kumar (Uni Roll: 12500222131)</li>
                            <li className="mb-2">Shahbaj Husain (Uni Roll: 12500222135)</li>
                            <li>Falguni Mondal (Uni Roll: 12500222137)</li>
                        </ul>

                        <h3 className='font-semibold underline tracking-wide'>Mentor / Guide</h3>
                        <p>This project was carried out under the guidance of :</p>
                        <br />
                        <p>Mr. Shiv Prasad</p>
                        <br />
                        His mentorship played a critical role in shaping the structure of the project and pushing us to explore steganography beyond textbook definitions.
                    </p>
                </div>

                <div className={`disclaimer mb-14`}>
                    <h1 className='about-heading w-full text-[2.5rem] leading-none font-bold mb-3 capitalize'>disclaimer</h1>
                    <p className="about-paragraph text-[1.2rem] leading-[1.2] lg:text-justify">
                        Stegx is developed purely for educational, research, and ethical use. It is intended to demonstrate how digital steganography can be used to protect information in creative and secure ways. The platform showcases a custom-built algorithm designed to raise awareness about data privacy, encryption, and secure communication.
                        <br /><br />
                        The developer(s) of Stegx do not promote or support the use of this tool for any illegal, malicious, or unauthorized activities, including but not limited to:
                        <ul className='list-disc mt-3 pl-7'>
                            <li className="mb-2">Hiding harmful content or code</li>
                            <li className="mb-2">Circumventing law enforcement or legal boundaries</li>
                            <li>Engaging in cybercrime, fraud, or unauthorized surveillance</li>
                        </ul>
                        <br /><br />
                        Users are solely responsible for how they choose to use this application. By using Stegx, you agree to comply with all applicable local, national, and international laws and regulations.
                        <br /><br />
                        The creators of Stegx shall not be held liable for any misuse, data loss, or damage resulting from the use of this platform.
                        <br /><br />
                        <span className='font-bold tracking-wide'>Use it responsibly. Respect privacy. Promote security.</span>
                    </p>
                </div>

                <div className={`explore mb-14`}>
                    <h1 className='about-heading w-full text-[2.5rem] leading-none font-bold mb-3 capitalize'>explore more</h1>
                    <p className="about-paragraph text-[1.2rem] leading-[1.2] lg:text-justify">
                        Want to see how Stegx works under the hood or try it yourself?
                        <h2 className='font-bold tracking-wide mt-3 mb-1'>👉 View the Source Code on GitHub :</h2>
                        <a className="link flex items-center gap-1" href='https://github.com/falguni-mondal/Stegx' target='_blank'>
                            <IoIosLink />
                            <span className='text-blue-700'>github.com/falguni-mondal/Stegx</span>
                        </a>
                        <h2 className='font-bold tracking-wide mt-3 mb-1'>👉 Try Out the Live Web App :</h2>
                        <Link className="link flex items-center gap-1" to='/'>
                            <IoIosLink />
                            <span className='text-blue-700'>stegx.netlify.app</span>
                        </Link>
                        <br />
                        Feel free to explore, test, and contribute responsibly!
                    </p>
                </div>

            </div>
        </section>
    )
}

export default About