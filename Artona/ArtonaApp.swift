//
//  ArtonaApp.swift
//  Artona
//
//  Created by Ome Asraf on 11/08/21.
//

import SwiftUI
import UIKit


final class AppDelegate: NSObject, UIApplicationDelegate {
    func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
        return true
    }
}


@main
struct ArtonaApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) var appDelegate
    
    
    
    var body: some Scene {
        WindowGroup {
            MainView()
        }
    }
}

struct MainView: View {
    var body: some View {
        NavigationView {
                TabbedView()
                    .navigationBarTitle("")
                    .navigationBarTitleDisplayMode(.inline)
                    .navigationBarHidden(true)
        }
    }
}
