import resume from './assets/MONTY_RESUME.pdf';

function ResumeButton() {
    return(
        <a href={resume} download="Aidan_Monty_Resume.pdf">
            <button className="ResumeButton">
                DOWNLOAD RESUME
            </button>
        </a>
    );
}

export default ResumeButton;