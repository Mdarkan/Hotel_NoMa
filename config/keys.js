if (process.env.NODE_ENV === "production") {
    console.log('******** obtaining keys for production environment ********');
    // not used... causes an error during deployment. module.exports = require("./prod.js");
    module.exports = {
        mongoURI: process.env.MONGO_URI,
        stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
        stripeSecretKey: process.env.STRIPE_SECRET_KEY,
        emailPassword: process.env.EMAIL_PASSWORD
    };

} else {
    console.log('******** obtaining keys for development environment ********');
    module.exports = require("./dev.js");
}