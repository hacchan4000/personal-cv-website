import mongoose from 'mongoose';

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://adityachandra:ad201104@cluster0.bxkn1xx.mongodb.net/portofolio-cv-website');
    console.log("DB Connected");
}