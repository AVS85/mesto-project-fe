require('dotenv').config({ path: '.env.deploy' });

module.exports = {
  apps: [{
    name: 'mesto-frontend',
    script: 'npm',
    args: 'start'
  }],
  deploy: {
    production: {
      user: process.env.DEPLOY_USER,
      host: process.env.DEPLOY_HOST,
      ref: process.env.DEPLOY_REF,
      repo: process.env.DEPLOY_REPOSITORY,
      path: process.env.DEPLOY_PATH,
      'post-deploy': 'npm ci && npm run build && pm2 reload ecosystem.config.js --env production'
    }
  }
}; 