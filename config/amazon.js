import "./env";
export default {
    //depending on where deployed, these could change.
    "awsaccess": process.env.AWS_ACCESS_KEY_ID,
    "awssecret": process.env.AWS_SECRET_ACCESS_KEY
};
