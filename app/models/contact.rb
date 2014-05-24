class Contact < ActiveRecord::Base

  before_save { self.email = email.downcase }
  # E-mail Validation
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z]+)*\.[a-z]+\z/i
  validates :email, presence: true, format: {with: VALID_EMAIL_REGEX}
  validates :name, presence: true
  # Phone Validation
  #VALID_PHONE_REGEX = /([0-9]{9,10})/
  VALID_PHONE_REGEX = /([0-9]{12})/
  validates :phone, presence: true, format: {with: VALID_PHONE_REGEX}
end
