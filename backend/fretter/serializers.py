from rest_framework import serializers
from .models import *

class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Note
        fields = ['id', 'name', 'enharmonic']

class ScaleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Scale
        fields = ['id', 'name']

class ChordSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chord
        fields = ['id', 'type']
        
class TuningSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tuning
        fields = ['id', 'name']

class IntervalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Interval
        fields = ['id', 'name', 'short_name', 'frets_from_root']

class TuningNoteSerializer(serializers.ModelSerializer):
    note = NoteSerializer()
    
    class Meta:
        model = TuningNote
        fields = ['note', 'string_number']

class ScaleWithIntervalsSerializer(serializers.ModelSerializer):
    intervals = serializers.SerializerMethodField()
    
    def get_intervals(self, obj):
        scale_intervals = ScaleInterval.objects.filter(scale_id=obj.id)
        interval_ids = scale_intervals.values_list('interval_id', flat=True)
        intervals = Interval.objects.filter(id__in=interval_ids)
        return IntervalSerializer(intervals, many=True).data

    class Meta:
        model = Scale
        fields = ['id', 'name', 'intervals']

class TuningWithNotesSerializer(serializers.ModelSerializer):
    notes = serializers.SerializerMethodField()
    
    def get_notes(self, obj):
        tuning_notes = TuningNote.objects.filter(tuning_id=obj.id)
        return TuningNoteSerializer(tuning_notes, many=True).data
    
    class Meta:
        model = Tuning
        fields = ['id', 'name', 'notes']

class ChordWithIntervalsSerializer(serializers.ModelSerializer):
    intervals = serializers.SerializerMethodField()
    
    def get_intervals(self, obj):
        chord_intervals = ChordInterval.objects.filter(chord_id=obj.id)
        interval_ids = chord_intervals.values_list('interval_id', flat=True)
        intervals = Interval.objects.filter(id__in=interval_ids)
        return IntervalSerializer(intervals, many=True).data
    
    class Meta:
        model = Chord
        fields = ['id', 'type', 'intervals']