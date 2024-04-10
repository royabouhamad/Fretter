from django.contrib import admin
from .models import * 

# Register your models here.
admin.site.register(Note)
admin.site.register(Scale)
admin.site.register(Chord)
admin.site.register(Tuning)
admin.site.register(Interval)
admin.site.register(TuningNote)
admin.site.register(ScaleInterval)
admin.site.register(ChordInterval)

