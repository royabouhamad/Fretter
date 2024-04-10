from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *

# Create your views here.
class NotesView(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class TuningsView(generics.ListCreateAPIView):
    queryset = Tuning.objects.all()
    serializer_class = TuningSerializer

class ScalesView(generics.ListCreateAPIView):
    queryset = Scale.objects.all()
    serializer_class = ScaleSerializer

class ChordsView(generics.ListCreateAPIView):
    queryset = Chord.objects.all()
    serializer_class = ChordSerializer
    
class ScaleIntervalsView(generics.ListCreateAPIView):
    queryset = Scale.objects.all()
    serializer_class = ScaleWithIntervalsSerializer

class SingleScaleIntervalsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Scale.objects.all()
    serializer_class = ScaleWithIntervalsSerializer
    
class TuningNotesView(generics.ListCreateAPIView):
    queryset = Tuning.objects.all()
    serializer_class = TuningWithNotesSerializer

class SingleTuningNotesView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tuning.objects.all()
    serializer_class = TuningWithNotesSerializer

class ChordIntervalsView(generics.ListCreateAPIView):
    queryset = Chord.objects.all()
    serializer_class = ChordWithIntervalsSerializer

class SingleChordIntervalsView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Chord.objects.all()
    serializer_class = ChordWithIntervalsSerializer