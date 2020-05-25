from flask import Flask,render_template,request
import os
import sqlite3


class SButton():
    
    Counter = 0
    
    def Create(self):
        ButtonApp = Flask(__name__)
        port = int(os.environ["PORT"])
        
        @ButtonApp.route('/',methods=['GET'])
        def Start():
            print ("Button loaded!")
            return render_template("index.html")

        @ButtonApp.route("/inc",methods=["Post"])
        def Increment():
            self.Counter += 1
            print ("Counter at: %d" % self.Counter)
            return render_template("index.html")

        ButtonApp.run(port=port,host="0.0.0.0")

    


Button = SButton()
Button.Create()
