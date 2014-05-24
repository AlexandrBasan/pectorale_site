require 'spec_helper'

describe "contacts/edit" do
  before(:each) do
    @contact = assign(:contact, stub_model(Contact,
      :email => "MyString",
      :name => "MyString",
      :phone => 1,
      :content => "MyText"
    ))
  end

  it "renders the edit contact form" do
    render

    # Run the generator again with the --webrat flag if you want to use webrat matchers
    assert_select "form[action=?][method=?]", contact_path(@contact), "post" do
      assert_select "input#contact_email[name=?]", "contact[email]"
      assert_select "input#contact_name[name=?]", "contact[name]"
      assert_select "input#contact_phone[name=?]", "contact[phone]"
      assert_select "textarea#contact_content[name=?]", "contact[content]"
    end
  end
end
