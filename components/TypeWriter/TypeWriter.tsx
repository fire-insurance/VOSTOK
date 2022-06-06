import { FC, useEffect, useRef, useState } from 'react'
import styles from './TypeWriter.module.scss'
import cn from 'classnames'

interface TypeWriterProps {
    words: string[],
    textClass: string
}

const TypeWriter: FC<TypeWriterProps> = ({ words, textClass }) => {

    const [isDeleting, setIsDeleting] = useState<boolean>(true);
    const isDeletingRef = useRef(isDeleting)
    isDeletingRef.current = isDeleting

    const [currentWord, setCurrentWord] = useState<string>(words[0])
    const currentWordRef = useRef(currentWord)
    currentWordRef.current = currentWord

    const [wordIndex, setWordIndex] = useState<number>(0)
    const wordIndexRef = useRef(wordIndex)
    wordIndexRef.current = wordIndex

    useEffect(() => {
        changeWordWithTypeWriter()
    }, [])

    const changeWordWithTypeWriter = () => {
        let typespeed: number = isDeletingRef.current ? 150 : 250;

        if (isDeletingRef.current) {
            setCurrentWord(words[wordIndexRef.current].substring(0, currentWordRef.current.length - 1))
        }
        else {
            setCurrentWord(words[wordIndexRef.current].substring(0, currentWordRef.current.length + 1))
        }
        if (isDeletingRef.current && currentWordRef.current == "") {
            setIsDeleting(false)
            setWordIndex(wordIndex => (wordIndex + 1) % words.length)
            typespeed = 1000
        }
        else if (!isDeletingRef.current && currentWordRef.current == words[wordIndexRef.current]) {
            setIsDeleting(true)
            typespeed = 1000

        }

        setTimeout(() => changeWordWithTypeWriter(), typespeed)
    }


    return (
        <div className={cn(styles.typewriter, textClass)}>
            {currentWord}
            <div className={styles.caret}></div>
            <span className={styles.transparent}> </span>
        </div>
    )
}

export default TypeWriter