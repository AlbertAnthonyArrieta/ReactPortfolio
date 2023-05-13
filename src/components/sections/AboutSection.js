import Container from 'react-bootstrap/Container';
import ImageAndDesc from "../common/ImageAndDesc";
import ProfilePic from '../../images/profile.png';
import TechnologyTile from "../common/TechnologyTile"

import { ReactComponent as JavaIcon } from '../../icons/java.svg';
import { ReactComponent as CPPIcon } from '../../icons/cpp.svg';
import { ReactComponent as HTMLIcon } from '../../icons/html5.svg';
import { ReactComponent as CSSIcon } from '../../icons/css3-alt.svg';
import { ReactComponent as JsIcon } from '../../icons/js-square.svg';
import { ReactComponent as SQLIcon } from '../../icons/mysql.svg';
import { ReactComponent as PythonIcon } from '../../icons/python.svg';
import { ReactComponent as ReactIcon } from '../../icons/react.svg';
import { ReactComponent as AngularIcon } from '../../icons/angular.svg';
import { ReactComponent as JQueryIcon } from '../../icons/jquery-plain.svg';
import { ReactComponent as GitHubIcon } from '../../icons/github-original.svg';
import { ReactComponent as GitLabIcon } from '../../icons/gitlab-plain.svg';
import { ReactComponent as VScodeIcon } from '../../icons/vscode-plain.svg';
import { ReactComponent as Fw7Icon } from '../../icons/framework7.svg';
import { ReactComponent as BSIcon } from '../../icons/bootstrap-plain.svg';




export const AboutSection = () => {

    return (
        <div id="about" className='section about'>
            <Container>
                <h1 className='section--title'>ABOUT ME</h1>
                <div className='section--container'>
                    <ImageAndDesc
                        img={ProfilePic}
                        heading={"Who is this guy?"}
                        paragraph={
                            "Hi there! I'm Albert, a Computer Science major in my last year at The University of Lethbridge, with a minor in New Media. I specialize in Front-end development, utilizing my creative ideas and eye for design to construct remarkable web applications. Furthermore, I hold a keen interest in full-stack development and aspire to develop robust, top-notch software."}
                    />
                </div>
                <div className='section--container'>
                    <h2 className='text--subheading'>Technologies</h2>
                    <div className='technology--container'>
                        <div className='about--item'>
                            <h3 className='text--highlight__cyan'>Programming Languages</h3>
                            <div className='technology--tiles'>
                                <TechnologyTile icon={<JavaIcon />} name={'Java'} />
                                <TechnologyTile icon={<CPPIcon />} name={'C++'} />
                                <TechnologyTile icon={<HTMLIcon />} name={'HTML5'} />
                                <TechnologyTile icon={<CSSIcon />} name={'CSS'} />
                                <TechnologyTile icon={<JsIcon />} name={'JavaScript'} />
                                <TechnologyTile icon={<PythonIcon />} name={'Python'}/>
                                <TechnologyTile icon={<SQLIcon />} name={'mySQL'} />
                            </div>

                        </div>
                        <div className='about--item'>
                            <h3 className='text--highlight__cyan'>Front-end</h3>
                            <div className='technology--tiles'>
                                <TechnologyTile icon={<ReactIcon />} name={'React'} />
                                <TechnologyTile icon={<AngularIcon />} name={'Angular'} />
                                <TechnologyTile icon={<JQueryIcon />} name={'JQuery'} />
                                <TechnologyTile icon={<Fw7Icon />} name={'Framework7'} />
                                <TechnologyTile icon={<BSIcon />} name={'Bootstrap'} />
                            </div>
                        </div>
                        <div className='about--item'>
                            <h3 className='text--highlight__cyan'>Tools</h3>
                            <div className='technology--tiles'>
                                <TechnologyTile icon={<GitHubIcon />} name={'GitHub'} />
                                <TechnologyTile icon={<GitLabIcon />} name={'GitLab'} />
                                <TechnologyTile icon={<VScodeIcon />} name={'VScode'} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
export default AboutSection