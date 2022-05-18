from django.shortcuts import render
from django.http import JsonResponse
from .models import Footprint
import json

# Create your views here.
def footprint_GET(request):
    footprints = Footprint.objects.filter(receiver="최윤한").order_by("sent_at")
    messages = list()

    for i in range(len(footprints)):
        messages.append(footprints[i].message)

    return JsonResponse(
        {"status": 200,
         "message" : 'Footprint',
         "data" : {
             "messages" : messages
         }
         }
    )

def footprint_POST(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)

    Footprint.objects.create(
        receiver = body['receiverName'],
        messages = body['content']
    )
    
    return JsonResponse(
        {
        "status" : 201,
        "message" : "메시지 전송 성공"
         }
    )