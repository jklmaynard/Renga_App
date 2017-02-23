Rails.application.routes.draw do
  root to: 'application#angular'

  resources :rengas, only: [:create, :index, :show] do
    resources :stanzas, only: [:create, :index, :edit] do
      member do
        put '/like' => 'stanzas#like'
      end
    end

    member do
      put '/like' => 'rengas#like'
    end
  end
end
