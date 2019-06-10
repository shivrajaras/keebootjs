
module.exports = {
    apps: [

        {
            name: "keebootjs",
            script: "server/server.js",
            env: {
                "NODE_ENV": "dev",
                "HOST": "0.0.0.0"
                    }
        }

    ]
} 

