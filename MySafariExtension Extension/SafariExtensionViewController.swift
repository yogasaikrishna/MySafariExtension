//
//  SafariExtensionViewController.swift
//  MySafariExtension Extension
//
//  Created by Sai Koneru on 27/08/2021.
//

import SafariServices

class SafariExtensionViewController: SFSafariExtensionViewController {
    
    static let shared: SafariExtensionViewController = {
        let shared = SafariExtensionViewController()
        shared.preferredContentSize = NSSize(width:320, height:240)
        return shared
    }()

}
