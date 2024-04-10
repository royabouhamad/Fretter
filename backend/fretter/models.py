from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator

# Create your models here.
class Note(models.Model):
    name = models.CharField(max_length=2)
    enharmonic = models.CharField(max_length=2, blank=True, null=True)
    
    def __str__(self):
        return self.name

class Scale(models.Model):
    name = models.CharField(max_length=250)
    
    def __str__(self):
        return self.name
    
class Chord(models.Model):
    type = models.CharField(max_length=10)
    
    def __str__(self):
        return self.type
    
class Tuning(models.Model):
    name = models.CharField(max_length=250)
    
    def __str__(self):
        return self.name

class Interval(models.Model):
    name = models.CharField(max_length=250)
    short_name = models.CharField(max_length=20)
    frets_from_root = models.IntegerField()
    
    def __str__(self):
        return self.name

class TuningNote(models.Model):
    tuning = models.ForeignKey(Tuning, on_delete=models.CASCADE)
    string_number = models.SmallIntegerField(validators=[MaxValueValidator(6), MinValueValidator(1)])
    note = models.ForeignKey(Note, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'Tuning: {self.tuning}, String: {self.string_number}, Note: {self.note}'
    
    class Meta:
        unique_together = (('tuning', 'string_number'),)

class ScaleInterval(models.Model):
    scale = models.ForeignKey(Scale, on_delete=models.CASCADE)
    interval = models.ForeignKey(Interval, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.scale}, {self.interval}'
    
    class Meta:
        unique_together = (('scale', 'interval'),)

class ChordInterval(models.Model):
    chord = models.ForeignKey(Chord, on_delete=models.CASCADE)
    interval = models.ForeignKey(Interval, on_delete=models.CASCADE)
    
    def __str__(self):
        return f'{self.chord}, {self.interval}'
    
    class Meta:
        unique_together = (('chord', 'interval'),)
