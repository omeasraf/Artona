//
//  HomeView.swift
//  Artona
//
//  Created by Ome Asraf on 11/8/21.
//

import SwiftUI


struct HomeView: View {
    var body: some View {
        ScrollView(showsIndicators: false) {
            VStack(alignment:.leading){
                HStack{
                    Spacer()
                    Image(uiImage: UIImage(named: "LargeIcon")!)
                        .resizable()
                        .frame(width: UIScreen.screenWidth - 170, height: UIScreen.screenWidth - 170, alignment: .center)
                        .cornerRadius(10.0)
                        .padding(.top, 40)
                    Spacer()
                }
                Spacer()
                    .frame(height: 20)
                VStack(alignment:.leading){
                Text("Artona extension can be enabled from settings")
                Text("Start by opening Safari and visiting a supported website. Tap on the search bar on the bottom of the page and then tap on the \"More\" button.")
                    .padding(.vertical, 10)

                Spacer()
                    .frame(height: 10)
                Image(systemName: "textformat.size")
                    .resizable()
                    .frame(width: 60, height: 40, alignment: .leading)
                    .foregroundColor(Color.accentColor)
                    Text("Then choose \"Extensions\":")
                        .padding(.vertical, 10)
                    HStack {
                        Text("Extensions")
                            .font(.system(size: 17.0))
                            .foregroundColor(Color(UIColor.secondaryLabel))
                        Spacer()
                        Image(systemName: "puzzlepiece")
                            .font(.system(size: 17.0))
                            .foregroundColor(Color(UIColor.secondaryLabel))
                    }
                    .padding(20)
                    .background(Color(UIColor.opaqueSeparator))
                    .cornerRadius(5)
                    Text("Tap on \"Artona\" and turn it on.")
                        .padding(.vertical, 10)
                    Text("Then give Artona access to all the supported websites and enjoy customizing websites.")

                        
                }
                .padding(10)
                
                HStack{
                    Link(destination: URL(string: "https://github.com/omeasraf/Artona")!) {
                        Image("Github")
                            .resizable()
                            .frame(width: 50, height: 50)
                    }
                    .padding(10)
                    Link(destination: URL(string: "https://omeasraf.com")!) {
                        Image(systemName: "link.circle")
                            .resizable()
                            .font(.system(size: 50.0))
                            .foregroundColor(Color(UIColor.label))
                            .frame(width: 50, height: 50)
                    }
                    .padding(10)
                    Link(destination: URL(string: "https://discord.gg/FMkYSfFcYt")!) {
                        Image("Discord")
                            .resizable()
                            .frame(width: 60, height: 60)
                    }
                    .padding(10)
                    
                }
            }
        }
    }
}

struct HomeView_Previews: PreviewProvider {
    static var previews: some View {
        HomeView()
    }
}
