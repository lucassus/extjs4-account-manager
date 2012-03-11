Extjs4AccountManager::Application.routes.draw do
  resources :users
  root :to => 'index#index'
end
