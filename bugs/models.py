from __future__ import unicode_literals
from django.db import models

class Bug(models.Model): 
    link = models.CharField(max_length=3000)
    wooyunId = models.CharField(max_length=3000)
    title = models.CharField(max_length=3000)
    company = models.CharField(max_length=3000)
    author = models.CharField(max_length=3000)
    type = models.CharField(max_length=3000)
    level = models.CharField(max_length=3000)
    selfRank = models.CharField(max_length=3000)
    tags = models.CharField(max_length=3000)