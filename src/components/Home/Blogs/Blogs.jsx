
import Footer from '../../Shared/Footer/Footer';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Blogs = () =>
{
    return (
        <div>
            <section>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>How will you improve the performance of a React Application ?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>
                                <li>Keeping component state local where necessary.</li>
                                <li>Windowing or list virtualization in React.</li>
                                <li>Memoizing React components to prevent unnecessary re-renders.</li>
                                <li>Lazy loading images in React.</li>
                                <li>Code-splitting in React using dynamic import()</li>
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography> What are the different ways to manage a state in a React application ?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>5 Types of Application State in React and How They Help in State Management</p>
                            <p>
                                <li>Communication State: Communication state forms the backbone of your React Native app without you even knowing about it. Remember when you introduced the communication system in your app.</li>
                                <li>Data State: Data state covers information that your React application stores temporarily for various business functions. Supposedly, you are building a project management app.</li>
                                <li>Control State: Contrary to the state mentioned above in a React app, the control state does not represent the applications environment. Instead, it refers to the state which the user has input into the app.</li>
                                <li>Session State: Session state contains information about the user of the application such as user id, permissions, passwords, etc.</li>
                                <li>Location State: Location state is the UTF-8 display that appears in your URL bar. Also, the HTML5 History API allows you to store states separately from the specific URL.</li>
                            </p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>
                            How does prototypical inheritance work ?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

                        </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>What is a unit test? Why should write unit tests ?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>Unit test: Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation.</p>
                            <p>One of the benefits of unit tests is that they isolate a function, class or method and only test that piece of code. Higher quality individual components create overall system resiliency. Thus, the result is reliable code. Unit tests also change the nature of the debugging process.</p>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <Typography>Why you do not set the state directly in React ?
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <p>Because, One should never update the state directly because of the following reasons: If you update it directly, calling the setState() afterward may just replace the update you made. When you directly update the state, it does not change this.</p>

                        </Typography>
                    </AccordionDetails>
                </Accordion>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Blogs;