//
//  UIKitTabView.swift
//  Artona
//
//  Created by Ome Asraf on 11/7/21.
//

import UIKit
import SwiftUI


struct UIKitTabView: View {
    var viewControllers: [UIHostingController<AnyView>]

    init(_ tabs: [Tab]) {
        self.viewControllers = tabs.map {
            let host = UIHostingController(rootView: $0.view)
            host.tabBarItem = $0.barItem
            return host
        }
        
    }

    var body: some View {
        
        
        TabBarController(controllers: viewControllers)
            .edgesIgnoringSafeArea(.all)
    }

    struct Tab {
        var view: AnyView
        var barItem: UITabBarItem

        init<V: View>(view: V, barItem: UITabBarItem) {
            self.view = AnyView(view)
            self.barItem = barItem
        }
    }
}

struct TabBarController: UIViewControllerRepresentable {
    var controllers: [UIViewController]

    func makeUIViewController(context: Context) -> UITabBarController {
        let tabBarController = UITabBarController()
        tabBarController.viewControllers = controllers
        tabBarController.tabBar.barTintColor = UIColor.systemBackground
        return tabBarController
    }

    func updateUIViewController(_ uiViewController: UITabBarController, context: Context) {

    }
}
