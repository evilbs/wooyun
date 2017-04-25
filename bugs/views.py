from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse
from django.core.paginator import Paginator
from .models import Bug


# Create your views here.

def index(request): 
    paginator = Paginator(Bug.objects.all(),25).page(1)
    data = serializers.serialize('json', paginator) 
    return HttpResponse(data, content_type="application/json")


def company(request):
    data = Bug.objects.values_list('company',flat=True).distinct()
    return HttpResponse(data, content_type="application/json")

    