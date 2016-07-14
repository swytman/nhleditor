set :stage, :production
server '198.199.109.47', user: 'swytman', port: 17768, roles: %w{web app db}
