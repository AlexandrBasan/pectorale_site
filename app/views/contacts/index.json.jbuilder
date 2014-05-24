json.array!(@contacts) do |contact|
  json.extract! contact, :email, :name, :phone, :content
  json.url contact_url(contact, format: :json)
end