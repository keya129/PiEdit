# -*- coding: utf-8 -*-

from __future__ import division

import socket

import requests
import psutil

from autobahn.twisted.wamp import Application
from autobahn.twisted.util import sleep

from twisted.internet.defer import inlineCallbacks


# We create the WAMP client.
app = Application('monitoring')

# This is my machine's public IP since
# this client must be able to reach my server
# from the outside. You should change this value
# to the IP of the machine you put Crossbar.io
# and Django.
SERVER = '10.189.250.5'
#SERVER='127.0.0.1'
# First, we use a trick to know the public IP for this
# machine.
s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
s.connect(("8.8.8.8", 80))
# We attach a dict to the app, so that its
# reference is accessible from anywhere.
app._params = {'name': socket.gethostname(), 'ip': s.getsockname()[0]}
app._socc={'lineNumber':'','editor':''}
s.close()


@app.signal('onjoined')
@inlineCallbacks
def called_on_joined():
    """ Loop sending the state of this machine using WAMP every x seconds.

        This function is executed when the client joins the router, which
        means it's connected and authenticated, ready to send WAMP messages.
    """
    print("Connected")

    # Then we make a POST request to the server to notify it we are active
    # and to retrieve the configuration values for our client.
    #dict={'1':'sejal','2':'keya'}

    response = requests.post('http://10.189.248.225:8080/clients/', data={'1':'sejal','2':'keya'})
    if response.status_code == 200:
        app._socc.update(response.json())
    else:
        print("Could not retrieve configuration for client: {} ({})".format(response.reason, response.status_code))

@app.subscribe('keya.'+'6')
def update_configuration(args):
    app._socc.update(args)
    print(args)
    print("hello")
    stats=args
    # The we loop for ever.
    print("Entering stats loop ..")
    app.session.publish('clientstats', stats)
    print("Stats published: {}".format(stats))

# We subscribe to the "clientconfig" WAMP event.


# We start our client.
if __name__ == '__main__':
    app.run(url=u"ws://%s:8080/ws" % SERVER, debug=False, debug_wamp=False)
