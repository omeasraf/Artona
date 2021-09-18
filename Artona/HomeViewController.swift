//
//  HomeViewController.swift
//  Artona
//
//  Created by Ome Asraf on 7/17/21.
//

import UIKit
import WebKit
import SafariServices

class HomeViewController: UIViewController {

    @IBOutlet weak var imageView: UIImageView!
    
    @IBOutlet weak var extensionView: UIView!
    
    @IBOutlet weak var githubButton: UIImageView!
    @IBOutlet weak var discordButton: UIImageView!
    @IBOutlet weak var websiteButton: UIImageView!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        imageView.layer.masksToBounds = true
        imageView.layer.cornerRadius = 10.0
        extensionView.layer.cornerRadius = 5;
        extensionView.layer.masksToBounds = true;
        
        let tapGestureRecognizer = UITapGestureRecognizer(target: self, action: #selector(imageTapped(tapGestureRecognizer:)))
        let discordGestureRecognizer = UITapGestureRecognizer(target: self, action: #selector(imageTapped(tapGestureRecognizer:)))
        let websiteTapRecognizer = UITapGestureRecognizer(target: self, action: #selector(imageTapped(tapGestureRecognizer:)))
        githubButton.isUserInteractionEnabled = true
        discordButton.isUserInteractionEnabled = true
        websiteButton.isUserInteractionEnabled = true
        githubButton.addGestureRecognizer(tapGestureRecognizer)
        discordButton.addGestureRecognizer(discordGestureRecognizer)
        websiteButton.addGestureRecognizer(websiteTapRecognizer)
    }

    @objc func imageTapped(tapGestureRecognizer: UITapGestureRecognizer)
    {
        let tappedImage = tapGestureRecognizer.view as! UIImageView
        let tag = tappedImage.tag
        print(tag)
        let svc = SFSafariViewController(url: URL(string: tag == 1 ? "https://github.com/omeasraf/Artona" : tag == 2 ?  "https://omeasraf.com" : "https://discord.gg/FMkYSfFcYt")!)
        self.present(svc, animated: true, completion: nil)
    }

}
