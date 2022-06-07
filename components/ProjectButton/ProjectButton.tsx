import { FC, MouseEventHandler } from "react";
import styles from './ProjectButton.module.scss'
import cn from 'classnames'

interface ProjectButtonProps {
    text: string,
    extraClass?: string,
    type?: 'submit' | 'button'
    onClick?: MouseEventHandler<HTMLButtonElement>
}

const ProjectButton: FC<ProjectButtonProps> = ({ text, extraClass, type, onClick }) => {

    return (
        <button
            className={cn(styles['project-button'], extraClass)}
            type={type ? type : 'button'}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default ProjectButton;