class UsersController < ApplicationController
  respond_to :js

  def index
    users = User.all

    respond_with(users) do |format|
      format.json
    end
  end

  def create
    user = User.new(params[:user])
    user.save

    respond_with(user) do |format|
      if user.valid?
        format.json
      else
        format.json { render json: { success: false, errors: user.errors } }
      end
    end
  end

  def update
    user = User.find(params[:id])
    user.update_attributes(params[:user])

    respond_with(user) do |format|
      if user.valid?
        format.json
      else
        format.json { render json: { success: false, errors: user.errors } }
      end
    end
  end

  def destroy
    user = User.find(params[:id])
    user.destroy

    respond_with(user) do |format|
      format.json
    end
  end
end
