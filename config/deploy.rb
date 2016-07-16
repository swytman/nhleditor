
# config valid only for current version of Capistrano

set :application, 'nhleditor'
set :pm2_app_command, 'pm2 start npm --name "nhleditor" -- start'
set :repo_url, 'git@github.com:swytman/nhleditor.git'
set :branch, "master"
set :deploy_to, '/var/www/nhleditor'
set :linked_dirs, %w{node_modules data}

namespace :deploy do
   desc 'Restart application'
   task :restart do
     # invoke 'npm:install'
     invoke 'pm2:delete'
     invoke 'pm2:start'
   end

   after :publishing, :restart
end
