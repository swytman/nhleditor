
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
     on roles(:web) do
       execute 'pm2 delete nhleditor'
       execute 'pm2 start npm --name "nhleditor" -- start'
     end
   end

   after :publishing, :restart
end
