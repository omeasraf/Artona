//
//  FeedbackViewController.swift
//  Artona
//
//  Created by Ome Asraf on 9/18/21.
//

import UIKit
import MessageUI


class FeedbackViewController: UIViewController, MFMailComposeViewControllerDelegate {

    @IBOutlet weak var nameField: UITextField!
    @IBOutlet weak var emailField: UITextField!
    @IBOutlet weak var urlField: UITextField!
    @IBOutlet weak var messageField: UITextView!
    @IBOutlet weak var submitButton: UIButton!
    
    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let tapGesture = UITapGestureRecognizer(target: self, action: #selector(self.dismissKeyboard (_:)))
        self.view.addGestureRecognizer(tapGesture)
        
        let allTextFields = [nameField, emailField, urlField, messageField]
        
        for textField in allTextFields{
            textField!.layer.borderWidth = 1
            textField!.layer.cornerRadius = 5
            textField!.layer.borderColor = UIColor.tintColor.cgColor
        }
        
        nameField.placeholder = "Your Name (Optional)"
        emailField.placeholder = "Your Email (Optional)"
        urlField.placeholder = "Website URL"
    }
    
    @IBAction func onClick(_ sender: UIButton, forEvent event: UIEvent){
        if !urlField.hasText || !messageField.hasText || urlField.text != nil && (urlField.text?.count)! < 5 || messageField.text != nil && (messageField.text?.count)! < 5 {
            let alert = UIAlertController(title: "Error", message: "A valid website URL and message is required!", preferredStyle: .alert)
            alert.addAction(UIAlertAction(title: NSLocalizedString("OK", comment: "Default action"), style: .default, handler: { _ in
                print("Done.")
            }))
            self.present(alert, animated: true, completion: nil)
            return
        }
        
        if MFMailComposeViewController.canSendMail() {
                let mail = MFMailComposeViewController()
                mail.mailComposeDelegate = self
                mail.setToRecipients(["seaters_member_0w@icloud.com"])
                mail.setSubject("Artona Feedbacks!")
                var message:String = ""
                if (nameField.hasText){
                    message +=  "Name: " + nameField.text! + "\n"
                }
                if emailField.hasText {
                    mail.setPreferredSendingEmailAddress(emailField.text!)
                }
                message += "URL: " + urlField.text! + "\n"
                message += "Message: " + messageField.text + "\n"
            message += "\n\n"
            
            if let version:String = Bundle.main.releaseVersionNumber, let buildNumber = Bundle.main.buildVersionNumber {
                message += """
                        {
                        "version": "\(version)",
                        "Build": "\(buildNumber)",
                        }
                        """
            }
            
                mail.setMessageBody(message, isHTML: false)

                present(mail, animated: true)
            } else {
                let alert = UIAlertController(title: "Error", message: "Something went wrong while trying to get the email, please try again!", preferredStyle: .alert)
                alert.addAction(UIAlertAction(title: NSLocalizedString("OK", comment: "Default action"), style: .default, handler: { _ in
                    print("Done.")
                }))
                self.present(alert, animated: true, completion: nil)
            }
        
    }
    
    func mailComposeController(_ controller: MFMailComposeViewController, didFinishWith result: MFMailComposeResult, error: Error?) {
        controller.dismiss(animated: true)
    }
    
    @objc func dismissKeyboard (_ sender: UITapGestureRecognizer) {
        let allTextFields = [nameField, emailField, urlField, messageField]
        for textfield in allTextFields{
            textfield!.resignFirstResponder()
        }
        
    }
    
    

}


extension Bundle {
    var releaseVersionNumber: String? {
        return infoDictionary?["CFBundleShortVersionString"] as? String
    }
    var buildVersionNumber: String? {
        return infoDictionary?["CFBundleVersion"] as? String
    }
}
