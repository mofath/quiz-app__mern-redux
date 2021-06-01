const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
    {
        question: {
            type: String,
            required: true
        },
        answers: [{
            answer: {
                type: String,
                required: true
            },
            isCorrect: {
                type: Boolean,
                default: false
            },
        }],
    },
    {
        timestamps: true,
        toObject: {
            transform: (doc, ret, options) => {
                ret.id = ret._id;
                delete ret._id;
                delete ret.__v;
                return ret;
            },
        }
    }
);




const QuestionModel = mongoose.model('question', questionSchema);



module.exports = { QuestionModel };