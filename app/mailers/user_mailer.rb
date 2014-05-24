class UserMailer < ActionMailer::Base
  default from: "info@teleport-ds.com"

  def send_newsletters(newsletter)
    @newsletter = newsletter
    @blog_title = Blog.where(id: @newsletter.blog_id).take.title
    @blog_content = Blog.where(id: @newsletter.blog_id).take.content
    #mail(to: Proc.new { User.where(admin: true).pluck(:email) },
    mail(bcc: @newsletter.to,
         subject: @newsletter.subject,
         template_path: 'user_mailer',
         template_name: 'send_newsletters')
  end
end
