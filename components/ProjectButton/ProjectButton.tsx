import { FC } from "react";
import styles from './ProjectButton.module.scss'
import cn from 'classnames'

interface ProjectButtonProps {
    text: string,
    extraClass?: string
}

const ProjectButton:FC<ProjectButtonProps> = ({text, extraClass}) => {

    return (
        <button className={cn(styles['project-button'], extraClass)} type="button">{text}</button>
    )
}

export default ProjectButton;