// file contact.js
import FormData from 'form-data'
import mailjet from 'mailjet.js'
import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req, res) {
    console.log('Data', req.body)
    /**
     *
     * This call sends a message to one recipient.
     *
     */
    const API_KEY = "756986a42199b44922ee65440d0becf1"

    const mailjet = require ('node-mailjet')
        .connect(process.env.MJ_APIKEY_PUBLIC, process.env.MJ_APIKEY_PRIVATE)
    const request = mailjet
        .post("send", {'version': 'v3.1'})
        .request({
            "Messages":[
                    {
                            "From": {
                                    "Email": "pilot@mailjet.com",
                                    "Name": "Mailjet Pilot"
                            },
                            "To": [
                                    {
                                            "Email": "adityanugraha7251@gmail.com",
                                            "Name": "passenger 1"
                                    }
                            ],
                            "Subject": "Your email flight plan!",
                            "TextPart": "Dear passenger 1, welcome to Mailjet! May the delivery force be with you!",
                            "HTMLPart": "<h3>Dear passenger 1, welcome to <a href=\"https://www.mailjet.com/\">Mailjet</a>!</h3><br />May the delivery force be with you!"
                    }
            ]
        })
    request
        .then((result) => {
            console.log(result.body)
        })
        .catch((err) => {
            console.log(err.statusCode)
        })
    res.status(200).json({ message: 'Hello from Next.js!' })
}