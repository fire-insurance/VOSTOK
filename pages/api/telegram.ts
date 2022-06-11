import axios from "axios"

export default async (req: any, res: any) => {

    try {
        const { source, name, phone, question } = req.query

        const message = `Новая заявка ${source}: \n\n● Имя: ${name} \n\n● Телефон: ${phone} \n\n● Вопрос: ${question}`
        const url = `https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage?chat_id=${process.env.CHAT_ID}&text=`
        const sendURL = encodeURI(url + message)
        axios.get(sendURL)

        res.status(200).json({message: 'send'})

    } catch (error) {
        res.status(500).json({message: error})
    }

}