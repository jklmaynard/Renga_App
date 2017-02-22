class ApplicationController < ActionController::Base

  respond_to :json

  protect_from_forgery with: :exception
  def angular
    render 'layouts/application'
  end
end
