//
//  TabbedView.swift
//  Artona
//
//  Created by Ome Asraf on 11/08/21.
//

import SwiftUI

struct TabbedView: View {
    init() {
        UITabBar.appearance().backgroundColor = .systemBackground
        UITabBar.appearance().barTintColor = .systemBackground
        let tabBarAppearance = UITabBarAppearance()
        tabBarAppearance.configureWithOpaqueBackground()
        tabBarAppearance.backgroundColor = .systemBackground
        UITabBar.appearance().standardAppearance = tabBarAppearance
    }
    
    var body: some View {
        UIKitTabView([
            UIKitTabView.Tab(
                view:
                    HomeView()
                    .navigationBarTitle("")
                    .navigationBarHidden(true)
                ,
                barItem: UITabBarItem(title: nil, image: UIImage(systemName: "house"), selectedImage: UIImage(systemName: "house.fill"))
            ),
            UIKitTabView.Tab(
                view:
                    Feedback()
                    .navigationBarTitle("Feedback")
                    .navigationBarHidden(true)
                ,
                barItem: UITabBarItem(title: nil, image: UIImage(systemName: "envelope"), selectedImage: UIImage(systemName: "envelope.fill"))
            )
        ])
    }
}


struct TabbedView_Previews: PreviewProvider {
    static var previews: some View {
        TabbedView()
            .preferredColorScheme(.dark)
    }
}
